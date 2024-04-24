export interface ValidateProps {
  message: string;
}

export const Validate: React.FC<ValidateProps> = (props) => {
  return (
    <>
      <p style={{ color: "red" }}>{props.message}</p>
    </>
  );
};
