import React from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack spacing="2rem">
      <Image src="/images/about.png" alt="About" />

      <Stack spacing="2rem" padding="8" px={{ md: 32 }} w={{ md: 130 }}>
        <Stack>
          <Heading as="h2" fontSize="2xl">
            What is SHARP?
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            sed consectetur arcu at velit. Et vel integer amet curabitur egestas
            diam blandit vel. Lorem sapien, neque donec sollicitudin. Justo,
            venenatis sit tellus et. Viverra etiam maecenas ac turpis aliquam,
            eget velit maecenas. Donec quis mi aliquam cursus mauris. Mauris
            risus sed auctor fringilla rhoncus tortor sed. Egestas dignissim
            donec ornare id pellentesque commodo. Dui morbi ullamcorper in
            iaculis erat tincidunt.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
