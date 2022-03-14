import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

import { Button } from "../components/reusable/Button";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HomeHeader = () => {
  return (
    <Box bg="black" color="white">
      <HStack
        pl={{ md: 20 }}
        px={{ base: 4, md: 10 }}
        spacing={{ md: "5rem" }}
        h={{ base: 123, md: 122 }}
        pos="relative"
        w={{ md: "85%" }}
        mx="auto"
      >
        <Stack w={{ md: "50%" }} spacing={{ base: "4rem", md: "1rem" }}>
          <Stack spacing="1rem" textAlign={{ base: "center", md: "left" }}>
            <MotionHeading
              as="h2"
              fontSize={{ base: "5xl", md: "6xl" }}
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
              fontSize={{ md: "xl" }}
              initial={{ opacity: 0, x: -300 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, ...transition },
              }}
            >
              Obtain professional services with this flexible app{" "}
              <Box as="br" d={{ base: "none", md: "block" }} />
              that links you to responsive Service Providers
            </MotionText>
          </Stack>
          <HStack
            spacing={{ md: "5rem" }}
            flexDirection={{ base: "column", md: "row" }}
            justify="space-between"
            w={{ md: 90 }}
          >
            <NextLink href="/become-sepro" passHref>
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
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.0, ...transition },
                }}
                d="block"
                pt={{ base: 4, md: 0 }}
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
        <Box
          w={{ md: "50%" }}
          pos="absolute"
          bottom={0}
          right={0}
          d={{ base: "none", md: "block" }}
        >
          <Image src="/images/home-img.png" />
        </Box>
      </HStack>
    </Box>
  );
};

export default HomeHeader;
