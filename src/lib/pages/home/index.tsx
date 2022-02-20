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
import { motion } from "framer-motion";
import NextLink from "next/link";

import { Button } from "../../components/reusable/Button";
import AuthHeader from "../../styles/customTheme/components/AuthHeader";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
  return (
    <Stack spacing="0rem">
      <HStack
        d={{ base: "none", md: "flex" }}
        bg="gray.50"
        pl={{ md: 20 }}
        spacing={{ md: "5rem" }}
      >
        <Stack w={{ md: "30%" }} spacing="1rem">
          <MotionHeading
            as="h2"
            fontSize={{ md: "6xl" }}
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, ...transition },
            }}
          >
            Secure quality efficient and professional services
          </MotionHeading>
          <MotionText
            fontSize="xl"
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, ...transition },
            }}
          >
            Obtain professional services with this flexible app that links you
            to responsive Service Providers
          </MotionText>
          <NextLink href="/request" passHref>
            <MotionLink
              _hover={{ textDecor: "none" }}
              width={{ md: 40 }}
              initial={{ opacity: 0, x: -300 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.8, ...transition },
              }}
            >
              <Button
                title="Request Serpro"
                colorScheme="primaryButton"
                color="black"
                width={{ md: 56 }}
              />
            </MotionLink>
          </NextLink>
        </Stack>
        <Box w={{ md: "70%" }}>
          <Image src="/images/home-banner.jpg" />
        </Box>
      </HStack>

      <Stack
        d={{ base: "block", md: "none" }}
        spacing="1.5rem"
        px={{ base: 5, md: 0 }}
        h={120}
        pt={10}
      >
        <AuthHeader
          title="Secure quality efficient and professional services"
          subtitle="Obtain professional services with this flexible app that links you
            to responsive Service Providers"
          image="home-banner.jpg"
        />
        <NextLink href="/request" passHref>
          <MotionLink
            d="block"
            _hover={{ textDecor: "none" }}
            width={{ md: 40 }}
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, ...transition },
            }}
          >
            <Button
              title="Request Serpro"
              colorScheme="primaryButton"
              color="black"
            />
          </MotionLink>
        </NextLink>
      </Stack>

      <Box bg="brand.accent" p={{ base: 10, md: 48 }}>
        <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
          <Stack>
            <Image w={16} h={16} src="/images/bandwidth.png" alt="speed" />
            <Heading as="h5" fontSize="xl">
              Speed of use
            </Heading>
            <Text>
              this app is a handy tool that can be accessed anytime and anywhere
              for both Customers and Serpros
            </Text>
          </Stack>

          <Stack>
            <Image w={16} h={16} src="/images/idea.png" alt="Smart" />
            <Heading as="h5" fontSize="xl">
              Smart
            </Heading>
            <Text>
              the app ensures that available and reliable Serpros are obtained
              by Customers at all times.
            </Text>
          </Stack>

          <Stack>
            <Image
              w={16}
              h={16}
              src="/images/satisfaction.png"
              alt="satisfaction"
            />
            <Heading as="h5" fontSize="xl">
              Satisfaction
            </Heading>
            <Text>
              the app guarantees the satisfaction of both Customers and Serpros
              at an affordable cost.
            </Text>
          </Stack>
        </Grid>
      </Box>

      <Box bg="gray.50" p={{ base: 6, md: 48 }} py={{ base: 20, md: 48 }}>
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)" }}
          gap={{ base: 6, md: 12 }}
          alignItems="center"
        >
          <Stack spacing="2rem">
            <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }}>
              Download the mobile app today!
            </Heading>
            <Text fontSize={{ md: "lg" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              porttitor aliquam nulla feugiat duis vitae ipsum malesuada.
            </Text>
            <HStack spacing="2rem">
              <Box as="button" role="button" aria-label="playstore button">
                <Image
                  h={{ base: 10, md: 14 }}
                  src="/images/playstore.png"
                  alt="playstore"
                />
              </Box>
              <Box as="button" role="button" aria-label="appstore button">
                <Image
                  h={{ base: 10, md: 14 }}
                  src="/images/appstore.png"
                  alt="appstore"
                />
              </Box>
            </HStack>
          </Stack>
          <Image src="/images/phones.png" alt="phones" />
        </Grid>
      </Box>
    </Stack>
  );
};

export default Home;
