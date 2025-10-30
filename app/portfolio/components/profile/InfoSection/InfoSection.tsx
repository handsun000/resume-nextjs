import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";

const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  color: #333;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
  text-align: left;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.14);
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Slogan = styled.p`
  font-size: 1.13rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Description = styled.p`
  font-size: 1.08rem;
  color: #333;
  text-align: left;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function InfoSection() {
    const profileImgPath =
        (process.env.NODE_ENV === "production" ? "/resume-nextjs" : "") +
        "/assets/image/profile/resume_photo.jpg";

    return (
        <>
            <div>
                <ProfileImage src={profileImgPath} />
                <Name>SON JIN YEONG</Name>
                <Slogan>“안 되면, 될 때까지”</Slogan>
            </div>
            <div>
                <Description>
                    개발 과정에서 마주하는 어려움 앞에서도 포기하지 않고 끝까지 해내려고 합니다.
                    <br />
                    문제를 해결하는 과정 하나하나가 저를 더 성장시키는 소중한 경험임을 믿기에,
                    <br />
                    늘 새로운 해답을 찾아 도전하고 배우는 개발자가 되고자 합니다.
                </Description>
            </div>
        </>
    );
}
