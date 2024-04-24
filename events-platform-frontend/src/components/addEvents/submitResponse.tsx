export interface SubmitResponseProps {
  message: string;
}

export const SubmitResponse: React.FC<SubmitResponseProps> = (props) => {
  return (
    <>
      <p style={{ color: "blue" }}>{props.message}</p>
    </>
  );
};
