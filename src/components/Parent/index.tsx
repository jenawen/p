import { Landing } from "../Landing";
import { SideNavigation } from "../Navigation/SideNavigation";
import { Flex } from "@prismane/core";
import "./index.css";
import { useState } from "react";
import { Projects } from "../Projects";
import { AboutMe } from "../AboutMe";
import { ContactMe } from "../ContactMe";

export const Parent = () => {
  const [page, setPage] = useState("landing");

  return (
    <div>
      <Flex h="100vh" w="100vw" direction="row" justify="center">
        <Flex h="100%" w="100%" justify="center">
          {page === "landing" ? (
            <Landing />
          ) : page === "projects" ? (
            <Projects />
          ) : page === "about me" ? (
            <AboutMe />
          ) : page === "contact me" ? (
            <ContactMe />
          ) : null}
        </Flex>
        <Flex h="100%" w="6%" justify="center" align="start">
          <SideNavigation setPage={setPage} />
        </Flex>
      </Flex>
    </div>
  );
};
