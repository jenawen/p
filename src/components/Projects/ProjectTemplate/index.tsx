import { Grid, fr } from "@prismane/core";
import "./index.css";

export const ProjectTemplate = (props: any) => {
  const { title, description, picture, pills } = props;
  return (
    <div className="template">
      <div>img</div>
      <div className="text">
        <div className="t-title">{title}</div>
        <div className="t-desc">{description}</div>
        <div>pills</div>
      </div>
    </div>
  );
};
