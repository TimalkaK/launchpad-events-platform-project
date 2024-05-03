export interface ValidateLoginProps {
  message: string;
}

export const ValidateLogin: React.FC<ValidateLoginProps> = (props) => {
  return (
    <>
      <p className="validation_text" style={{ color: "black" }}>
        {props.message}
      </p>
    </>
  );
};
