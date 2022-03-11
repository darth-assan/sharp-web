import { Box, Heading, Image, Stack } from "@chakra-ui/react";

import LeftImage from "../lib/components/LeftImage";
import RightImage from "../lib/components/RightImage";

const BecomeSepro = () => {
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
              title="Verify your Identity"
              subtitle="Use your National Identification Card (Ghana Card) as a form of identification"
            />
            <LeftImage
              no={3}
              top={-20}
              title="Set Availability"
              subtitle="Use the toggle bar to indicate your availabity for work."
            />
            <RightImage
              no={4}
              title="Accept Requests"
              subtitle="Youre now ready to receive and accept requests!"
            />
            <LeftImage
              no={5}
              top={-20}
              arrow={false}
              title="Ready to Earn!"
              subtitle="That’s it! After completing these steps, you are now ready to earn some cash!"
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

export default BecomeSepro;
