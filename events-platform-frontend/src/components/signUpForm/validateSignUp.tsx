export interface ValidateSignUpProps {
  message: string;
}

export const ValidateSignUp: React.FC<ValidateSignUpProps> = (props) => {
  return (
    <>
      <p className="validation_text" style={{ color: "black" }}>
        {props.message}
      </p>
    </>
  );
};
