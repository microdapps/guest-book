import { Container, Image, Button } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

export const Header = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        src="/MD-Youtube-Icon-Round.png"
        alt="MicroDapps Logo"
        width={75}
        height={75}
        onClick={() => {
          window.location.href = "/";
        }}
        style={{ cursor: "pointer" }}
      />
      <Button
        size="sm"
        variant="default"
        leftIcon={<IconUsers size={20} />}
        style={{
          cursor: "pointer",
          borderRadius: "3px",
        }}
        onClick={() => {
          window.location.href = "/guest-book";
        }}
      >
        Guest Book
      </Button>
    </Container>
  );
};
