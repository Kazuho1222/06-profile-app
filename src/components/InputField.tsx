/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Label from "./Label";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyle = css`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        css={inputStyle}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;