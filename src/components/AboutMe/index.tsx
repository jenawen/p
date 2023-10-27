import { Box, Center, Flex, fr } from "@prismane/core";

export const AboutMe = () => {
  return (
    <>
      <Flex direction="column" justify="start" align="center">
        <Box w={"78%"} pt={fr(25)}>
          <Center py={fr(5)}>
            {" "}
            <div className="title">About Me</div>{" "}
          </Center>

          <Box py={fr(2)}>
            <div className="normal-text">
              For the past two years, I’ve created streamlined user interfaces
              for the credit card and financial industry. I'm passionate about
              web design and development and excel at implementing intended
              designs into functional, scalable components. I love collaborating
              with others, and strive to make the design-to-development process
              as productive as possible.{" "}
            </div>
          </Box>

          <Box py={fr(2)}>
            <div className="normal-text">
              Outside of web development, I have an interest in data analysis
              and have experience creating data reports and dashboards. I enjoy
              taking high-volume datasets and creating dynamic ways to visualize
              and interact with them, just like with websites and applications.
            </div>
          </Box>

          <Box py={fr(2)}>
            <div className="normal-text">
              I mostly utilize React and TypeScript. I have sufficient
              experience with JavaScript, HTML5, CSS3, as well as automated unit
              testing using Jest and Vitest. I often use Express and Node.js for
              back-end functionality. Python and Streamlit are my favorites for
              data visualization and analysis. I also love tinkering with Figma
              and UX design.
            </div>
          </Box>
          <Box py={fr(2)}>
            <div className="normal-text">
              In my free time, I love doing nail art and going to cute cafes. I
              can never say no to coffee or boba :)
            </div>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
