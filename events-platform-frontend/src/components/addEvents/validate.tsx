export interface ValidateProps {
  message: string;
}

export const Validate: React.FC<ValidateProps> = (props) => {
  return (
    <>
      <p className="validation_text" style={{ color: "black" }}>
        {props.message}
      </p>
    </>
  );
};
