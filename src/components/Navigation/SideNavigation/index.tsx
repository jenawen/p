import { Grid, fr, Center } from "@prismane/core";
import home from "../../../assets/home.svg";
import projects from "../../../assets/projects.svg";
import about from "../../../assets/about.svg";
import contact from "../../../assets/contact.svg";

export const SideNavigation = (props: any) => {
  const { setPage } = props;
  return (
    <Center>
      <Grid templateRows={5} gap={fr(8)} w="100%">
        <Grid.Item> </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("landing");
          }}
        >
          <img src={home} id="icon-link" />
        </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("projects");
          }}
        >
          {" "}
          <img src={projects} id="icon-link" />
        </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("about me");
          }}
        >
          {" "}
          <img src={about} id="icon-link" />
        </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("contact me");
          }}
        >
          {" "}
          <img src={contact} id="icon-link" />
        </Grid.Item>
      </Grid>
    </Center>
  );
};
