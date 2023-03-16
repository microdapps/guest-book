import {
  Container,
  Title,
  Text,
  Accordion,
  createStyles,
  rem,
  Box,
  Kbd,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export const InstructionData = () => {
  const { classes } = useStyles();
  return (
    <>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="step-1">
          <Accordion.Control>
            Step 1: Fork this Github repository
          </Accordion.Control>
          <Accordion.Panel>
            To fork a repository, click on the <Kbd>Fork</Kbd> button on the top
            right corner of the repository page. This will create a copy of the
            repository in your Github account.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-2">
          <Accordion.Control>
            Step 2: Clone your forked repository
          </Accordion.Control>
          <Accordion.Panel>
            To clone a repository, click on the green <Kbd>Code</Kbd> button on
            the top right corner of the forked repository page. Copy the{" "}
            <Kbd>HTTPS</Kbd> URL provided and run the following command in your
            terminal:
            <p>
              <Kbd>{`git clone <url>`}</Kbd>
            </p>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-3">
          <Accordion.Control>Step 3: Create a new branch</Accordion.Control>
          <Accordion.Panel>
            <p>
              {" "}
              To create a new branch, run the following command in your
              terminal:
            </p>
            <Kbd>{`git checkout -b <branch-name>`}</Kbd>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-4">
          <Accordion.Control>
            Step 4: Add your entry to the guest book.
          </Accordion.Control>
          <Accordion.Panel>
            <span>To create a entry you need to add an object to the </span>
            <Kbd>guestEntries</Kbd> array in the <Kbd>guest-book.ts</Kbd> file.
            The object should have the following properties: <Kbd>name</Kbd>,{" "}
            <Kbd>country</Kbd>.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-5">
          <Accordion.Control>Step 5: Commit your changes</Accordion.Control>
          <Accordion.Panel>
            <>
              <p>
                To commit your changes, run the following commands in your
                terminal:
              </p>

              <Box>
                <Kbd>git add .</Kbd>
              </Box>
              <Box>
                <Kbd>{`git commit -m "Guest Book Entry"`} </Kbd>
              </Box>
            </>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-6">
          <Accordion.Control>
            Step 6: Push your changes to your forked repository
          </Accordion.Control>
          <Accordion.Panel>
            <p>
              To push your changes to your forked repository, run the following
              command in your terminal:
            </p>{" "}
            <Kbd>git push origin branch-name</Kbd>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-7">
          <Accordion.Control>Step 7: Create a pull request</Accordion.Control>
          <Accordion.Panel>
            <p>
              To create a pull request, click on the green{" "}
              <Kbd>Create Pull Request</Kbd> button on the top right corner of
              the forked repository page. Add a title and description to your
              pull request.
            </p>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="step-8">
          <Accordion.Control>
            Step 8: Wait for your pull request to be merged
          </Accordion.Control>
          <Accordion.Panel>
            <p>
              Once your pull request is merged, you will receive a notification
              email. You can then pull the changes from the upstream repository
              to your local repository to keep it up-to-date.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
