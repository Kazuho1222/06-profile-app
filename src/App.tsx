/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import InputField from "./components/InputField";
import ImageUpload from "./components/ImageUpload";
import ProfileCard from "./components/ProfileCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"

interface UserProfile {
  name: string;
  birthday: string;
  phoneNumber: string;
  photo: string;
}

const appContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const formContainerStyle = css`
  width: 35%;
  margin-right: 20px;
`;

const cardContainerStyle = css`
  width: 45%;
  height: 400px;
  display-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const downloadButtonStyle = css`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

const App  = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    birthday: "",
    phoneNumber: "",
    photo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (file: File | null) => {
    if (file) {
      setUserProfile({ ...userProfile, photo: URL.createObjectURL(file) });
    } else {
      setUserProfile({ ...userProfile, photo: ""});
    }
  };

  const handleDownload = async () => {
    const card = document.getElementById("profile-card");
    if (card) {
      const canvas = await html2canvas(card);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("profile-card.pdf")
    }
  };

  return (
    <div css={appContainerStyle}>
      <div css={formContainerStyle}>
        <InputField
          label="名前"
          type="text"
          name="name"
          value={userProfile.name}
          onChange={handleInputChange}
        />
        <InputField
          label="誕生日"
          type="date"
          name="birthday"
          value={userProfile.birthday}
          onChange={handleInputChange}
        />
        <InputField
          label="電話番号"
          type="text"
          name="phoneNumber"
          value={userProfile.phoneNumber}
          onChange={handleInputChange}
        />
        <ImageUpload
          label="プロフィール写真"
          onImageChange={handleImageChange}
        />
        <button css={downloadButtonStyle} onClick={handleDownload}>
          ダウンロード
        </button>
      </div>
      <div css={cardContainerStyle}>
          <ProfileCard
            name={userProfile.name}
            birthday={userProfile.birthday}
            phoneNumber={userProfile.phoneNumber}
            photo={userProfile.photo}
          />
        </div>
    </div>
  );
};

export default App;
