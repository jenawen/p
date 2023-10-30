import "./index.css";

interface IPill {
  text: string;
  link?: string | null;
}
export const Pills = (props: IPill) => {
  const { text } = props;

  return <div className={`pill`}>{text}</div>;
};
