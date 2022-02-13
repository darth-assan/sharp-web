import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import AuthHeader from "../../styles/customTheme/components/AuthHeader";
import { Button } from "../../components/reusable/Button";

const Home = () => {
  return (
    <Stack spacing="2.5rem">
      <Stack spacing="1.5rem" margin="8">
        <AuthHeader
          title="Lorem ipsum dolor sit, consectetur adipiscing."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img="home"
        />
        <Button
          title="Request Serpro"
          colorScheme="primaryButton"
          color="black"
        />
      </Stack>

      <Box bg="brand.accent" p={10}>
        <Grid gap={6}>
          <Stack>
            <Heading as="h5" fontSize="xl">
              Lorem ipsum dolor sit amet
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Stack>

          <Stack>
            <Heading as="h5" fontSize="xl">
              Lorem ipsum dolor sit amet
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Stack>

          <Stack>
            <Heading as="h5" fontSize="xl">
              Lorem ipsum dolor sit amet
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Stack>
        </Grid>
      </Box>

      <Box>
        <Image src="/images/home-mobile.png" alt="mobile download" />
      </Box>
    </Stack>
  );
};

export default Home;
