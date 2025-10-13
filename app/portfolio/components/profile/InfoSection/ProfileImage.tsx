import React from "react";
import styled from "styled-components";

const ProfileImageWrap = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 85%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default function ProfileImage({ src, alt }: { src: string; alt?: string }) {
    return (
        <ProfileImageWrap>
            <Img src={src} alt={alt ?? "프로필 이미지"} />
        </ProfileImageWrap>
    );
}
