import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import { HiOutlineThumbUp } from "react-icons/hi";

import IconBox from "../lib/components/IconBox";
import LeftImage from "../lib/components/LeftImage";
import RightImage from "../lib/components/RightImage";
import { HandyTool, Speed } from "../lib/styles/icons";

const Request = () => {
  const features = [
    { id: 1, icon: Speed, text: "Satisfied" },
    { id: 2, icon: HandyTool, text: "Happy" },
    { id: 2, img: "accessible", text: "Affordable" },
    { id: 2, icon: HiOutlineThumbUp, text: "Relief" },
    { id: 2, img: "professional", text: "Peace of Mind" },
  ];

  return (
    <Box spacing={{ base: "2rem", md: "10rem" }}>
      <Box h={{ base: 90, md: 120 }}>
        <Image h="full" w="full" fit="cover" src="/images/request-hero.jpg" />
      </Box>

      <Box bg="white" p={{ base: 6, md: 48 }} py={{ base: 20, md: 40 }}>
        <Stack
          w={{ md: 137 }}
          mx="auto"
          align="center"
          justify="center"
          spacing={{ md: "6rem" }}
        >
          <Box>
            <Heading>How To Sign Up</Heading>
          </Box>

          <Box>
            <LeftImage
              title="Create An Account"
              subtitle="Get answers to the frequently asked questions about VDL"
            />
            <RightImage
              no={2}
              title="Pick a Job Category"
              subtitle="From the list of options, select the job category your problem fits into"
            />
            <LeftImage
              no={3}
              top={-20}
              title="Make a Request"
              subtitle="Fill in your location, job description and wait while we connect you to an artisan."
            />
            <RightImage
              no={4}
              title="Get the Job done!"
              subtitle="Voila! Sit back and relax and watch your problem being fixed!"
              arrow={false}
            />
          </Box>

          <Stack textAlign="center" spacing="4rem" w={{ md: "85%" }} mx="auto">
            <Heading>Why SHARP?</Heading>

            <HStack align="center" justify="space-between">
              {features.map((item) => (
                <IconBox
                  key={item.id}
                  icon={item.icon}
                  text={item.text}
                  img={item.img}
                />
              ))}
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Request;
