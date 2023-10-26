import { Grid, fr, Center } from "@prismane/core";

export const SideNavigation = (props: any) => {
  const { setPage } = props;
  return (
    <Center>
      <Grid templateRows={5} gap={fr(5)} w="100%">
        <Grid.Item> </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("landing");
          }}
        >
          {" "}
          home
        </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("projects");
          }}
        >
          {" "}
          projects
        </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("about me");
          }}
        >
          {" "}
          about me
        </Grid.Item>
        <Grid.Item
          onClick={() => {
            setPage("contact me");
          }}
        >
          {" "}
          contact me
        </Grid.Item>
      </Grid>
    </Center>
  );
};
