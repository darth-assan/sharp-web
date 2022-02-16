import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import AuthHeader from "../../styles/customTheme/components/AuthHeader";
import { Button } from "../../components/reusable/Button";

const Home = () => {
  return (
    <Stack>
      <HStack bg="gray.50" p={{ md: 32 }}>
        <Stack w={{ md: "60%" }} spacing="1rem">
          <Heading as="h2" fontSize={{ md: "6xl" }}>
            Lorem ipsum dolor sit, consectetur adipiscing.
          </Heading>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <NextLink href="/request" passHref>
            <Link _hover={{ textDecor: "none" }} width={{ md: 40 }}>
              <Button
                title="Request Serpro"
                colorScheme="primaryButton"
                color="black"
                width={{ md: 40 }}
              />
            </Link>
          </NextLink>
        </Stack>
        <Image src="/images/home.png" />
      </HStack>

      <Stack d={{ base: "block", md: "none" }} spacing="1.5rem" margin="8">
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

      <Box bg="brand.accent" p={{ base: 10, md: 32 }}>
        <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
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

      <Box bg="gray.50" p={{ md: 32 }}>
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)" }}
          gap={{ md: 12 }}
          alignItems="center"
        >
          <Stack spacing="2rem">
            <Heading as="h2" fontSize={{ md: "6xl" }}>
              Download the mobile app today!
            </Heading>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              porttitor aliquam nulla feugiat duis vitae ipsum malesuada.
            </Text>
            <HStack spacing="2rem">
              <Box as="button" role="button" aria-label="playstore button">
                <Image
                  h={{ md: 14 }}
                  src="/images/playstore.png"
                  alt="playstore"
                />
              </Box>
              <Box as="button" role="button" aria-label="appstore button">
                <Image
                  h={{ md: 14 }}
                  src="/images/appstore.png"
                  alt="appstore"
                />
              </Box>
            </HStack>
          </Stack>
          <Image src="/images/phones.png" alt="phones" />
        </Grid>
      </Box>

      {/*<Box>*/}
      {/*  <Image src="/images/home-mobile.png" alt="mobile download" />*/}
      {/*</Box>*/}
    </Stack>
  );
};

export default Home;
