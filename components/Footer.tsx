import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(200),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export const FooterSocial = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter
              size="1.05rem"
              stroke={1.5}
              onClick={() => {
                window.open("https://twitter.com/microdapps", "_blank");
              }}
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube
              size="1.05rem"
              stroke={1.5}
              onClick={() => {
                window.open("https://www.youtube.com/@microdapps", "_blank");
              }}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
