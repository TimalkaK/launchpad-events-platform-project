export interface ValidateSignUpProps {
  message: string;
}

export const ValidateSignUp: React.FC<ValidateSignUpProps> = (props) => {
  return (
    <>
      <p style={{ color: "black" }}>{props.message}</p>
    </>
  );
};
