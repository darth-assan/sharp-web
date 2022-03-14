import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

import LeftImage from "../lib/components/LeftImage";
import RightImage from "../lib/components/RightImage";
import { HandyTool, Speed } from "../lib/styles/icons";
import IconBox from "../lib/components/IconBox";

const BecomeSepro = () => {
  const features = [
    { id: 1, icon: Speed, text: "Smart" },
    { id: 2, icon: HandyTool, text: "Helping Hand" },
    { id: 2, img: "accessible", text: "Available" },
    { id: 2, icon: VscWorkspaceTrusted, text: "Reliable" },
    { id: 2, img: "professional", text: "Profitable" },
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

export default BecomeSepro;
