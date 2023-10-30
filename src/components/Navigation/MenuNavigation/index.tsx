import { Flex } from "@prismane/core";
import close from "../../../assets/close.svg";
import cv from "../../../../public/adkinsjena_resume.pdf";
import resume from "../../../assets/resume.svg";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";

export const MenuNavigation = (props: any) => {
  const { setOpenMenu, setPage } = props;
  return (
    <>
      <Flex p={"15px"} justify="end">
        <img
          id="icon-link"
          src={close}
          onClick={() => {
            setOpenMenu(false);
          }}
        />
      </Flex>

      <Flex h="100vh" w="100vw" direction="column" align="center">
        <Flex
          h="100%"
          w="80%"
          //   justify="center"
          align="center"
          direction="column"
          pt={"35%"}
        >
          <div
            style={{ padding: "10px" }}
            onClick={() => {
              setPage("landing");
              setOpenMenu(false);
            }}
          >
            home
          </div>
          <div
            style={{ padding: "10px" }}
            onClick={() => {
              setPage("projects");
              setOpenMenu(false);
            }}
          >
            projects
          </div>
          <div
            style={{ padding: "10px" }}
            onClick={() => {
              setPage("about me");
              setOpenMenu(false);
            }}
          >
            about me
          </div>
          <div
            style={{ padding: "10px", paddingBottom: "30px" }}
            onClick={() => {
              setPage("contact me");
              setOpenMenu(false);
            }}
          >
            contact me
          </div>
          <div className="divider"></div>

          <Flex
            w="60%"
            direction="row"
            justify="around"
            className="links"
            align="center"
            pt={"10%"}
          >
            <a href="https://www.linkedin.com/in/jena-adkins/">
              <img src={linkedin} id="icon-link" />
            </a>
            <a href="https://github.com/jenawen">
              <img src={github} id="icon-link" />
            </a>
            <a
              href={cv}
              download="jenaadkins_resume"
              target="_blank"
              rel="noreferrer"
            >
              <img src={resume} id="icon-link" />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
