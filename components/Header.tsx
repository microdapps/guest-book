import { Container, Text, Image } from "@mantine/core";

export const Header = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "1rem",
      }}
    >
      <Image
        src="/MD-Youtube-Icon-Round.png"
        alt="MicroDapps Logo"
        width={75}
        height={75}
      />
    </Container>
  );
};
