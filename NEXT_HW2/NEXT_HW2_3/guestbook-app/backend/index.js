const express = require('express'); //express 모듈을 가져옴
const cors = require('cors'); //cors 모듈을 가져옴
const { Pool } = require('pg'); //pg 모듈에서 Pool 클래스를 가져옴
require('dotenv').config(); //dotenv 패키지 사용
console.log(process.env.DATABASE_URL); //환경변수값 체크

const serverApp = express(); //express application 초기화
serverApp.use(cors()); //cors 미들웨어 추가
serverApp.use(express.json()); //JSON 요청 본문 파싱

const dbPool = new Pool({
    connectionString: process.env.DATABASE_URL, //DB 연결
    ssl: false, //SSL 사용 안 함
});

// 방명록 항목 추가
serverApp.post('/api/guestbook', async (req, res) => {
    const { name, message, password } = req.body;
    try {
        const result = await dbPool.query(
            'INSERT INTO guestbook (name, message, password) VALUES ($1, $2, $3) RETURNING *',
            [name, message, password]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 방명록 항목 가져오기
serverApp.get('/api/guestbook', async (req, res) => {
    try {
        const result = await dbPool.query('SELECT id, name, message, created_at FROM guestbook ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 방명록 항목 수정
serverApp.put('/api/guestbook/:id', async (req, res) => {
    const { id } = req.params;
    const { message, password } = req.body;
    try {
        const result = await dbPool.query('SELECT password FROM guestbook WHERE id = $1', [id]);
        if (result.rows.length > 0 && result.rows[0].password === password) {
            const updateResult = await dbPool.query(
                'UPDATE guestbook SET message = $1 WHERE id = $2 RETURNING id, name, message, created_at',
                [message, id]
            );
            res.json(updateResult.rows[0]);
        } else {
            res.status(403).json({ error: '비밀번호가 일치하지 않습니다.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 방명록 항목 삭제
serverApp.delete('/api/guestbook/:id', async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    try {
        const result = await dbPool.query('SELECT password FROM guestbook WHERE id = $1', [id]);
        if (result.rows.length > 0 && result.rows[0].password === password) {
            await dbPool.query('DELETE FROM guestbook WHERE id = $1', [id]);
            res.json({ message: '삭제되었습니다.' });
        } else {
            res.status(403).json({ error: '비밀번호가 일치하지 않습니다.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 좋아요 추가 및 취소 API
serverApp.post('/api/guestbook/:id/like', async (req, res) => {
    const { id } = req.params; // 방명록 항목의 id
    const { user_id } = req.body; // 클라이언트에서 전달된 user_id

    if (!user_id) {
        return res.status(400).json({ error: 'user_id가 필요합니다.' });
    }

    try {
        const likeCheck = await dbPool.query('SELECT * FROM likes WHERE guestbook_id = $1 AND user_id = $2', [
            id,
            user_id,
        ]);

        if (likeCheck.rows.length > 0) {
            await dbPool.query('DELETE FROM likes WHERE guestbook_id = $1 AND user_id = $2', [id, user_id]);

            const result = await dbPool.query('SELECT COUNT(*) AS like_count FROM likes WHERE guestbook_id = $1', [id]);
            return res.json({ message: '좋아요가 취소되었습니다.', like_count: result.rows[0].like_count });
        } else {
            const result = await dbPool.query('INSERT INTO likes (guestbook_id, user_id) VALUES ($1, $2) RETURNING *', [
                id,
                user_id,
            ]);

            const likeCount = await dbPool.query('SELECT COUNT(*) AS like_count FROM likes WHERE guestbook_id = $1', [
                id,
            ]);
            return res.json({ message: '좋아요가 추가되었습니다.', like_count: likeCount.rows[0].like_count });
        }
    } catch (err) {
        console.error('좋아요 처리 중 오류:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// 좋아요 수 조회 API
serverApp.get('/api/guestbook/:id/likes', async (req, res) => {
    const { id } = req.params; // 방명록 항목의 id

    try {
        const result = await dbPool.query('SELECT COUNT(*) AS like_count FROM likes WHERE guestbook_id = $1', [id]);
        res.json({ like_count: result.rows[0].like_count });
    } catch (err) {
        console.error('좋아요 수 조회 중 오류:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// 방명록 항목 검색 API
serverApp.get('/api/guestbook/search', async (req, res) => {
    const { query: searchTerm } = req.query; // 클라이언트에서 전달된 검색어

    try {
        if (!searchTerm || searchTerm.trim() === '') {
            const result = await dbPool.query('SELECT * FROM guestbook ORDER BY id DESC');
            return res.json(result.rows);
        }

        const result = await dbPool.query(
            'SELECT * FROM guestbook WHERE message ILIKE $1 ORDER BY id DESC',
            [`%${searchTerm}%`] // ILIKE는 대소문자 구분 없는 부분 일치 검색
        );
        res.json(result.rows);
    } catch (err) {
        console.error('검색 중 오류 발생:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// 서버 실행
const SERVER_PORT = process.env.PORT || 3001;
serverApp.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});
