export interface LoginResponseProps {
  message: string;
}

export const LoginResponse: React.FC<LoginResponseProps> = (props) => {
  return (
    <>
      <p className="validation_text" style={{ color: "blue" }}>
        {props.message}
      </p>
    </>
  );
};
