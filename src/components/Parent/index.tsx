import { Landing } from "../Landing";
import { SideNavigation } from "../Navigation/SideNavigation";
import { Flex } from "@prismane/core";
import "./index.css";

export const Parent = () => {
  return (
    <div>
      <Flex h="100vh" w="100vw" direction="row" justify="center">
        <Flex h="100%" w="100%" justify="center">
          <Landing />
        </Flex>
        <Flex h="100%" w="6%" justify="center" align="start">
          <SideNavigation />
        </Flex>
      </Flex>
    </div>
  );
};
