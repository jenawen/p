import { Box, Center, Flex, fr } from "@prismane/core";
import { ProjectTemplate } from "./ProjectTemplate";
import { glucose, underwriting } from "./ProjectText";

export const Projects = () => {
  return (
    <>
      <Box w={"78%"} pt={fr(20)}>
        <Flex direction="column" justify="start" align="center">
          <Center py={fr(5)}>
            {" "}
            <div className="title">Projects</div>
          </Center>
          <ProjectTemplate
            title={underwriting.title}
            description={underwriting.description}
          />
          <ProjectTemplate
            title={glucose.title}
            description={glucose.description}
          />
        </Flex>
      </Box>
    </>
  );
};
