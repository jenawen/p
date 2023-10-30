/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Center, Flex, fr } from "@prismane/core";
import { ProjectTemplate } from "./ProjectTemplate";
import { glucose, sawara, underwriting } from "./ProjectText";
import uw from "../../assets/projects/uw.svg";
import glucosep from "../../assets/projects/glucose.svg";
import sawarap from "../../assets/projects/sawara.svg";

export const Projects = (props: any) => {
  const { pt } = props;
  return (
    <>
      <Box w={"78%"} pt={pt}>
        <Flex direction="column" justify="start" align="center">
          <Center py={fr(5)}>
            {" "}
            <div className="title">Projects</div>
          </Center>
          <ProjectTemplate
            title={underwriting.title}
            description={underwriting.description}
            picture={uw}
            pillies={underwriting.pills}
          />
          <ProjectTemplate
            title={glucose.title}
            description={glucose.description}
            picture={glucosep}
            pillies={glucose.pills}
            link={"https://github.com/jenawen/glucose"}
          />
          <ProjectTemplate
            title={sawara.title}
            description={sawara.description}
            picture={sawarap}
            pillies={sawara.pills}
            link={"https://sawara.vercel.app/"}
          />
        </Flex>
      </Box>
    </>
  );
};
