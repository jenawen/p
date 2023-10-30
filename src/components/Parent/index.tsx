/* eslint-disable react-hooks/exhaustive-deps */
import { Landing } from "../Landing";
import { SideNavigation } from "../Navigation/SideNavigation";
import { Flex, fr } from "@prismane/core";
import "./index.css";
import { useEffect, useState } from "react";
import { Projects } from "../Projects";
import { AboutMe } from "../AboutMe";
import { ContactMe } from "../ContactMe";
import menu from "../../assets/menu.svg";
import { MenuNavigation } from "../Navigation/MenuNavigation";

export const Parent = () => {
  const [page, setPage] = useState("landing");
  const [paddingTopLanding, setPaddingTopLanding] = useState("");
  const [pt, setPt] = useState(fr(20));
  const [openMenu, setOpenMenu] = useState(false);
  const width = window.innerWidth;

  useEffect(() => {
    if (width <= 480) {
      setPaddingTopLanding("50%");
      setPt(fr(10));
    } else {
      setPaddingTopLanding("15%");
    }
  }, []);

  return (
    <>
      {openMenu ? (
        <>
          <MenuNavigation setOpenMenu={setOpenMenu} setPage={setPage} />
        </>
      ) : (
        <>
          {" "}
          {width >= 1280 ? null : (
            <Flex p={"15px"} justify="end">
              <img
                id="icon-link"
                src={menu}
                onClick={() => {
                  setOpenMenu(true);
                }}
              />
            </Flex>
          )}
          <Flex h="100vh" w="100vw" direction="row" justify="center">
            <Flex h="100%" w="100%" justify="center">
              {page === "landing" ? (
                <Landing paddingTopLanding={paddingTopLanding} />
              ) : page === "projects" ? (
                <Projects pt={pt} />
              ) : page === "about me" ? (
                <AboutMe pt={pt} />
              ) : page === "contact me" ? (
                <ContactMe pt={pt} />
              ) : null}
            </Flex>

            {width >= 1280 ? (
              <>
                <Flex h="100%" w="6%" justify="center" align="start">
                  <SideNavigation setPage={setPage} />
                </Flex>
              </>
            ) : null}
          </Flex>
        </>
      )}
    </>
  );
};
