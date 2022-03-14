import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const CtaSection = () => {
  return (
    <Box bg="brand.primary">
      <HStack
        spacing={{ md: "8rem" }}
        p={{ base: 6, md: 24 }}
        py={{ base: 20, md: 24 }}
        flexDirection={{ base: "column", md: "row" }}
        w={{ md: "85%" }}
        mx="auto"
      >
        <Stack w={{ md: "50%" }}>
          <Heading as="h3" fontSize={{ base: "3xl", md: "5xl" }}>
            Download SHARP Today!
          </Heading>
          <Text>
            A secure, fast & reliable way to connect to trust-worthy, quality &
            customer obsessed service professionals.
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
        <Box pt={{ base: 10, md: 0 }}>
          <Image src="/images/sharp-app.png" />
        </Box>
      </HStack>
    </Box>
  );
};

export default CtaSection;
