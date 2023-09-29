import { Button } from "@mantine/core";

import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import Hoge from "@/components/Welcome/Hoge";
import { Welcome } from "@/components/Welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Hoge />
      <Button>Button</Button>
    </>
  );
}
