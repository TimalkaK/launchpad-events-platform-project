export interface ValidateLoginProps {
  message: string;
}

export const ValidateLogin: React.FC<ValidateLoginProps> = (props) => {
  return (
    <>
      <p style={{ color: "black" }}>{props.message}</p>
    </>
  );
};
