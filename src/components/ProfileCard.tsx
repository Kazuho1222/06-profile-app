/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ProfileCardProps {
  name: string;
  birthday: string;
  phoneNumber: string;
  photo: string;
}

const cardStyle = css`
  padding: 20px;
  width: 100%;
`;

const photoContainerStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const photoStyle = css`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const textStyle = css`
  text-align: center;
  margin: 10px 0;
`;

const ProfileCard = ({
  name,
  birthday,
  phoneNumber,
  photo,
}: ProfileCardProps) => {
  return (
    <div id="profile-card" css={cardStyle}>
      <div css={photoContainerStyle}>
        {photo && <img src={photo} alt="Profile" css={photoStyle} />}
      </div>
      <h3 css={textStyle}>{name}</h3>
      <p css={textStyle}>{birthday}</p>
      <p css={textStyle}>{phoneNumber}</p>
    </div>
  );
};

export default ProfileCard;