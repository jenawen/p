import { Grid, fr } from "@prismane/core";

export const ProjectTemplate = (props: any) => {
  const { title, description, picture, pills } = props;
  return (
    <>
      <Grid gap={fr(3)} templateColumns={8} templateRows={4} h="100%" w="100%">
        <Grid.Item
          columnStart={1}
          columnEnd={3}
          rowStart={2}
          rowEnd={4}
          bg="primary"
        >
          picture
        </Grid.Item>

        <Grid.Item columnStart={3} columnEnd={9} rowStart={2} rowEnd={2}>
          <span className="project-title">{title}</span>
        </Grid.Item>

        <Grid.Item
          columnStart={3}
          columnEnd={9}
          rowStart={3}
          rowEnd={5}
          h={"100%"}
        >
          <span className="normal-text">{description}</span>
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={9} rowStart={5} rowEnd={5}>
          pills
        </Grid.Item>
      </Grid>
    </>
  );
};
