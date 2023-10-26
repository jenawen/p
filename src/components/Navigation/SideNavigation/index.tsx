import { Grid, fr, Center } from "@prismane/core";

export const SideNavigation = () => {
  return (
    <Center>
      <Grid templateRows={5} gap={fr(8)} w="100%">
        <Grid.Item> </Grid.Item>
        <Grid.Item> home</Grid.Item>
        <Grid.Item> projects</Grid.Item>
        <Grid.Item> about me</Grid.Item>
        <Grid.Item> contact me</Grid.Item>
      </Grid>
    </Center>
  );
};
