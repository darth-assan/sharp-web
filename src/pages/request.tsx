import { Box, Heading, Image, Stack } from "@chakra-ui/react";

import LeftImage from "../lib/components/LeftImage";
import RightImage from "../lib/components/RightImage";

const Request = () => {
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

          <Stack>
            <Heading>Why SHARP?</Heading>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Request;
