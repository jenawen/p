import { Container, Center, Flex } from "@prismane/core";
import "./index.css";

export const Landing = () => {
  return (
    <Center>
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
          <div> lil plant icon here </div>
          {/* divider class */}
          <div className="divider"></div>
          <div className="location"> Credit One Bank - IT Development </div>
          <div className="links"> social media links </div>
        </Container>
      </Flex>
    </Center>
  );
};
