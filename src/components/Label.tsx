/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const labelStyle = css`
  margin-bottom: 5px;
  font-weight; bold;
`;

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label css={labelStyle} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;