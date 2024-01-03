/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Box, Flex, Image } from "@prismane/core";
import "./index.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import resume from "../../assets/resume.svg";
import location from "../../assets/location.svg";
import cv from "../../../public/adkinsjena_resume.pdf";

export const Landing = (props: any) => {
  const { paddingTopLanding } = props;
  const width = window.innerWidth;

  return (
    <Box pt={paddingTopLanding}>
      <Flex direction="column" justify="center" w="100%">
        <Container maxSize="lg">
          <Box className="title"> Hi, I'm Jena. </Box>
          {/* divider class */}
          <div className="divider"></div>
          <Box className="sub-title" pt={20}>
            {" "}
            I’m a <span style={{ color: "#B48A54" }}>web developer</span> based
            in Las Vegas.{" "}
          </Box>
          <Box className="sub-title" pt={12}>
            {" "}
            I transform data into interactive, elegant UI.{" "}
          </Box>
          <Box py={10}>
            {" "}
            <Image
              h={16}
              src="https://static.tumblr.com/f18cbae0cb489e5e8ecf61a833005bbd/uvvybbn/Vdvoa2m9q/tumblr_static_5we1xrd3iswsw44w8gwggwcoc.png"
              alt="sprout"
            />{" "}
          </Box>
          {/* divider class */}
          <div className="divider"></div>
          <Box className="location" py={15}>
            {" "}
            <img height="15px" src={location} id="loc-icon" />{" "}
            <a
              style={{ color: "#B48A54" }}
              href="https://www.creditonebank.com/"
            >
              Credit One Bank
            </a>
            &nbsp;- IT Development{" "}
          </Box>
          {width >= 1280 ? (
            <>
              {" "}
              <Flex
                w="60%"
                direction="row"
                justify="around"
                className="links"
                align="center"
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
            </>
          ) : null}
        </Container>
      </Flex>
    </Box>
  );
};
