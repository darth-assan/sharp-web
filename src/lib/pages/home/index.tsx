import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { BiTime } from "react-icons/bi";

import FAQ from "../../components/FAQ";
import { Button } from "../../components/reusable/Button";
import { faqs } from "../../constant";

import AboutItem from "./components/AboutItem";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
  return (
    <Stack spacing="0rem">
      <HStack
        d={{ base: "none", md: "flex" }}
        pl={{ md: 20 }}
        spacing={{ md: "5rem" }}
        bg="black"
        color="white"
        h={120}
        pos="relative"
      >
        <Stack w={{ md: "50%" }} spacing="1rem">
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
            Obtain professional services with this flexible app <br />
            that links you to responsive Service Providers
          </MotionText>
          <HStack spacing="5rem">
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
                d="block"
              >
                <Button
                  title="Become A Serpro"
                  colorScheme="primaryButton"
                  color="black"
                  width={{ md: 56 }}
                />
              </MotionLink>
            </NextLink>

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
                d="block"
              >
                <Button
                  title="Request Serpro"
                  colorScheme="primaryButton"
                  color="black"
                  width={{ md: 56 }}
                />
              </MotionLink>
            </NextLink>
          </HStack>
        </Stack>
        <Box w={{ md: "50%" }} pos="absolute" bottom={0} right={0}>
          <Image src="/images/home-img.png" />
        </Box>
      </HStack>

      <Box p={{ base: 6, md: 48 }} py={{ base: 20, md: 48 }}>
        <Stack textAlign="center" spacing="4rem">
          <Heading>Who We Are</Heading>

          <HStack>
            <Stack textAlign="center" align="center">
              <Icon as={BiTime} boxSize={20} />
              <Text
                fontSize={{ md: "lg" }}
                css={{
                  "::first-letter": {
                    fontWeight: 900,
                  },
                }}
              >
                Speed of Use
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Box>

      <Stack
        spacing="8rem"
        bg="brand.primary"
        p={{ base: 6, md: 48 }}
        py={{ base: 20, md: 48 }}
      >
        <AboutItem
          title="What is Sharp?"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper sed consectetur arcu at velit. Et vel integer amet
              curabitur egestas diam blandit vel. Lorem sapien, neque donec
              sollicitudin. Justo, venenatis sit tellus et. Viverra etiam
              maecenas ac turpis aliquam, eget velit maecenas. Donec quis mi
              aliquam cursus mauris. Mauris risus sed auctor fringilla rhoncus
              tortor sed. Egestas dignissim donec ornare id pellentesque
              commodo. Dui morbi ullamcorper in iaculis erat tincidunt."
          img="hero.jpg"
        />
        <AboutItem
          title="What is Sharp?"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper sed consectetur arcu at velit. Et vel integer amet
              curabitur egestas diam blandit vel. Lorem sapien, neque donec
              sollicitudin. Justo, venenatis sit tellus et. Viverra etiam
              maecenas ac turpis aliquam, eget velit maecenas. Donec quis mi
              aliquam cursus mauris. Mauris risus sed auctor fringilla rhoncus
              tortor sed. Egestas dignissim donec ornare id pellentesque
              commodo. Dui morbi ullamcorper in iaculis erat tincidunt."
          img="hero.jpg"
          flexDirection="row-reverse"
        />
      </Stack>

      <Box bg="white" p={{ md: 36 }}>
        <Stack w={{ md: 125 }} mx="auto" spacing="4rem">
          <Stack textAlign="center">
            <Heading>Frequently Asked Questions</Heading>
            <Text>
              Get answers to the frequently asked questions about SHARP!
            </Text>
          </Stack>

          <Box>
            {faqs.map((item) => (
              <FAQ key={item.id} title={item.title} />
            ))}
          </Box>
        </Stack>
      </Box>

      <HStack
        spacing="8rem"
        bg="brand.primary"
        p={{ base: 6, md: 48 }}
        py={{ base: 20, md: 48 }}
      >
        <Stack w={{ md: "50%" }}>
          <Heading as="h3" fontSize={{ md: "5xl" }}>
            Download the mobile app today!
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            porttitor aliquam nulla feugiat duis vitae ipsum malesuada.
          </Text>
          <HStack align="center" spacing="2rem">
            <Box>
              <Image
                h={10}
                w="full"
                src="/images/playstore.png"
                alt="Platstore"
              />
            </Box>

            <Box>
              <Image
                h={10}
                w="full"
                src="/images/appstore.png"
                alt="AppStore"
              />
            </Box>
          </HStack>
        </Stack>
        <Box>
          <Image src="/images/sharp-app.png" />
        </Box>
      </HStack>
    </Stack>
  );
};

export default Home;
