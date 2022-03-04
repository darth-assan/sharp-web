import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { BiCategory } from "react-icons/bi";
import { MdMiscellaneousServices, MdPhoneIphone } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";

import RequestSection from "lib/components/RequestSection";

const Request = () => {
  return (
    <Stack
      spacing={{ base: "2rem", md: "10rem" }}
      mx={8}
      mb={{ base: 20, md: 32 }}
    >
      <Box h={{ base: 90, md: 120 }}>
        <Image
          h="full"
          w="full"
          fit="cover"
          rounded="lg"
          objectPosition={{ md: "5% -170px" }}
          src="/images/request-hero.jpg"
        />
      </Box>

      <Stack px={{ md: 64 }} spacing="8rem">
        <Text>
          <Heading>A walkthrough of the steps</Heading>
          <Text>Follow these few steps Lorem ipsum dolor sit amet.</Text>
        </Text>

        <RequestSection
          title="Download the app"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              error fugiat laborum natus vero! Dolores!"
          image="hero"
          icon={MdPhoneIphone}
        />

        <RequestSection
          title="Create an account"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              error fugiat laborum natus vero! Dolores!"
          image="hero"
          flexDirection="row-reverse"
          icon={RiAccountBoxFill}
        />

        <RequestSection
          title="Select a category of work"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              error fugiat laborum natus vero! Dolores!"
          image="hero"
          icon={BiCategory}
        />

        <RequestSection
          title="Request a professional"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              error fugiat laborum natus vero! Dolores!"
          image="hero"
          flexDirection="row-reverse"
          icon={MdMiscellaneousServices}
        />

        <Stack w={{ md: 108 }}>
          <Heading as="h4" fontSize={{ md: "3xl" }}>
            And do much...
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            error fugiat laborum natus vero! Dolores!
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Request;
