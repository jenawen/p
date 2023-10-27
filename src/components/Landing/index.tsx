import { Container, Box, Flex, Image } from "@prismane/core";
import "./index.css";

export const Landing = () => {
  return (
    <Box pt={"16%"}>
      <Flex direction="column" justify="center" w="100%">
        <Container maxSize="lg">
          <div className="title"> Hellooo </div>
          {/* divider class */}
          <div className="divider"></div>
          <div className="sub-title">
            {" "}
            I’m a <span color="#B48A54">front-end developer</span> from Las
            Vegas, NV.{" "}
          </div>
          <div className="sub-title">
            {" "}
            I transform data into interactive, elegant UI.{" "}
          </div>
          <div>
            {" "}
            <Image
              h={16}
              src="https://static.tumblr.com/f18cbae0cb489e5e8ecf61a833005bbd/uvvybbn/Vdvoa2m9q/tumblr_static_5we1xrd3iswsw44w8gwggwcoc.png"
              alt="sprout"
            />{" "}
          </div>
          {/* divider class */}
          <div className="divider"></div>
          <div className="location"> Credit One Bank - IT Development </div>
          <div className="links"> social media links </div>
        </Container>
      </Flex>
    </Box>
  );
};
