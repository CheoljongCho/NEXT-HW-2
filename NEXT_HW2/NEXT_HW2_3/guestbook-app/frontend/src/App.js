import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [userId] = useState(1); // 로그인된 사용자 ID를 가정
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  // 방명록 항목을 초기 로드하거나 검색할 때 사용
  const fetchGuestbookEntries = async (query = "") => {
    try {
      const response = await fetch(`http://localhost:3001/api/guestbook/search?query=${query}`);
      const data = await response.json();
      setGuestbookEntries(data);
    } catch (error) {
      console.error("방명록 불러오기 중 오류 발생:", error);
    }
  };

  // 검색 버튼 클릭 시 호출
  const handleSearch = () => {
    fetchGuestbookEntries(searchQuery); // 검색어에 맞는 방명록 항목 가져오기
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message, password }),
    });
    const newEntry = await response.json();
    setGuestbookEntries([newEntry, ...guestbookEntries]);
    setName("");
    setMessage("");
    setPassword("");
  };

  const handleDelete = async (id) => {
    const userPassword = prompt("비밀번호를 입력하세요:");
    const response = await fetch(`http://localhost:3001/api/guestbook/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: userPassword }),
    });
    if (response.status === 403) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      setGuestbookEntries(guestbookEntries.filter((entry) => entry.id !== id));
    }
  };

  const handleEdit = async (id) => {
    const newMessage = prompt("수정할 메시지를 입력하세요:");
    const userPassword = prompt("비밀번호를 입력하세요:");
    const response = await fetch(`http://localhost:3001/api/guestbook/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage, password: userPassword }),
    });

    if (response.status === 403) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      const updatedEntry = await response.json();
      setGuestbookEntries(guestbookEntries.map((entry) => (entry.id === id ? updatedEntry : entry)));
    }
  };

  // 좋아요 추가/취소
  const handleLike = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/guestbook/${id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }), // 로그인된 사용자 ID를 사용
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message); // 좋아요 추가/취소 메시지

      // 좋아요 수 업데이트
      fetchLikesCount(id);
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
  };

  // 좋아요 수 가져오기
  const fetchLikesCount = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/guestbook/${id}/likes`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setGuestbookEntries((prevEntries) =>
        prevEntries.map((entry) => (entry.id === id ? { ...entry, likes: data.like_count } : entry))
      );
    } catch (error) {
      console.error("좋아요 수 조회 중 오류 발생:", error);
    }
  };

  return (
    <div className="App">
      <h1>방명록</h1>

      {/* 검색창과 검색 버튼 추가 */}
      <div>
        <input
          type="text"
          placeholder="메시지 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // 검색어 상태 업데이트
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="메시지" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">남기기</button>
      </form>

      <h2>방명록 목록</h2>
      <ul>
        {guestbookEntries.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.name}:</strong> {entry.message} <br />
            <small>{new Date(entry.created_at).toLocaleString()}</small> <br />
            <button onClick={() => handleEdit(entry.id)}>수정</button>
            <button onClick={() => handleDelete(entry.id)}>삭제</button>
            <br />
            <button className="like-button" onClick={() => handleLike(entry.id)}>
              <i className={`fas fa-thumbs-up ${entry.likes > 0 ? "liked" : ""}`}></i>
              {entry.likes > 0 ? " " : ""}
            </button>
            <span>Like: {entry.likes || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
