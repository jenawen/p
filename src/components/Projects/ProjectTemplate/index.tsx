/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import { Pills } from "../../Pills/index";
import plink from "../../../assets/projects/plink.svg";

export const ProjectTemplate = (props: any) => {
  const { title, description, picture, pillies, link } = props;

  return (
    <div className="template">
      <div className="t-img">
        <img src={picture} id="t-pic" />
      </div>
      <div className="text">
        <div className="t-title">
          {title}{" "}
          {link ? (
            <>
              <img
                src={plink}
                id="p-link"
                onClick={() => {
                  window.open(`${link}`, "_blank");
                }}
              />
            </>
          ) : null}
        </div>
        <div className="t-desc">{description}</div>
        <div className="pills">
          {pillies.map((e: { text: string }, i: number) => (
            <Pills text={e.text} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
