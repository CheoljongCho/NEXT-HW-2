import * as S from "styles/components/member/style"; //styled component로 만든 style을 모두 S에 담음
import Image from "next/image"; //Next.js 이미지 최적화 컴포넌트를 사용하여 이미지 불러옴
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive"; //반응형 디자인을 위해 미디어 쿼리를 React 컴포넌트에서 사용할 수 있게 해 줌
import { useRouter } from "next/router"; //Next.js의 라우팅 기능을 사용하여 페이지 간 이동 처리
import { PEOPLE_INFORMATION } from "constants/people";
import { PEOPLE_INFORMATION_TYPE } from "types/people/people-information"; //멤버 정보 타입 정리 : 정보 여부에 따라 렌더링 달라짐
import AOS from "aos"; //스크롤할 때 애니메이션 적용을 위한 라이브러리
import "aos/dist/aos.css"; //aos 애니메이션 스타일

interface MemberProps {
  peopleInformation: PEOPLE_INFORMATION_TYPE[];
}
export default function Member({ peopleInformation }: MemberProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  //useMediaQuery()로 반응형 뷰 처리
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });

  useEffect(() => {
    AOS.init(); //페이지 로드 시 애니메이션 효과 활성화
    //미디어 쿼리가 정의되면, 로딩 상태 해제
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!loading && ( //loading이 false일 때만 멤버 정보 렌더링
        <S.Container className="mount" isMobile={isMobile}>
          <>
            {peopleInformation && //멤버 정보 배열이 존재하면 매핑 시작
              peopleInformation.map((item: PEOPLE_INFORMATION_TYPE, index) => {
                return (
                  <S.MemberWrapper key={index}>
                    {/* Image */}
                    <S.MemberImgBox>
                      {item.imgSrc ? (
                        <Image
                          src={item.imgSrc}
                          alt={item.name}
                          width={220}
                          height={220}
                        />
                      ) : (
                        <div
                          style={{
                            backgroundColor: "#333333",
                            width: "220px",
                            height: "220px",
                          }}
                        />
                      )}
                    </S.MemberImgBox>
                    {/* Text1-2*/}
                    <S.MemberTextBox>
                      {/* Text1.이름과 배지 */}
                      <S.MemberName>
                        {/* 이름 렌더링 후, 한 칸 공백 추가 그리고 운영진이면 배지 추가 */}
                        {item.name}{" "}
                        {item.managementTeam && (
                          <S.ManagementTeamBadge>
                            {item.managementTeam}
                          </S.ManagementTeamBadge>
                        )}
                        {!item.managementTeam && (
                          <S.NormalBadge>학회원</S.NormalBadge> // 일반 학회원일 때 NormalBadge 적용
                        )}
                      </S.MemberName>
                      {/* Text2.학과 */}
                      <S.MemberInfo>
                        {item.department}
                        {item.masterDegree &&
                          `(${item.masterDegree && item.masterDegree})`}
                        {item.secondMajor &&
                          `(${item.secondMajor && item.secondMajor})`}{" "}
                        {`${item.classOf}학번`}
                      </S.MemberInfo>
                    </S.MemberTextBox>
                  </S.MemberWrapper>
                );
              })}
          </>
        </S.Container>
      )}
    </>
  );
}
