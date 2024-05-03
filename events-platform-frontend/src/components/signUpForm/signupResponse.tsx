export interface SignUpResponseProps {
  message: string;
}

export const SignUpResponse: React.FC<SignUpResponseProps> = (props) => {
  return (
    <>
      <p className="validation_text">{props.message}</p>
    </>
  );
};
