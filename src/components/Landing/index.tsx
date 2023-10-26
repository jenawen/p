import { Container, Center, Flex, Divider } from "@prismane/core";
import { Text } from "@prismane/core";
export const Landing = () => {
  return (
    <Center>
      <Flex direction="column" justify="center" w="100%">
        <Container maxSize="lg">
          <div> Hellooo </div>
          {/* divider class */}
          <div></div>
          <div> line 1 </div>
          <div> line 2 </div>
          <div> lil plant icon here </div>
          {/* divider class */}
          <div></div>
          <div> location </div>
          <div> social media links </div>
        </Container>
      </Flex>
    </Center>
  );
};
