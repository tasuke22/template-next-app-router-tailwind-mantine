import { Anchor, Text, Title } from "@mantine/core";

import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text inherit variant="gradient" component="span" gradient={{ from: "pink", to: "yellow" }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque autem quo suscipit! Est, corrupti. Laboriosam
        quae magni, odio velit cupiditate tenetur voluptatibus quidem laborum eum dolores, ex rem. Labore, laboriosam!
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          hogehogehoge
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
    </>
  );
}
