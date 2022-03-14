import { Box, Heading, HStack, Stack } from "@chakra-ui/react";

import IconBox from "../../components/IconBox";
import AboutSection from "../../sections/AboutSection";
import CtaSection from "../../sections/CTASection";
import FaqSection from "../../sections/FAQSection";
import HomeHeader from "../../sections/HomeHeader";
import { Speed } from "../../styles/icons";

const Home = () => {
  return (
    <Stack spacing="0rem">
      <HomeHeader />

      <Box p={{ base: 6, md: 48 }} py={{ base: 20, md: 48 }}>
        <Stack textAlign="center" spacing="4rem" w={{ md: "65%" }} mx="auto">
          <Heading>Who We Are</Heading>

          <HStack align="center" justify="space-between">
            <IconBox icon={Speed} text="Speed of Use" />
            <IconBox icon={Speed} text="Speed of Use" />
            <IconBox icon={Speed} text="Speed of Use" />
            <IconBox icon={Speed} text="Speed of Use" />
            <IconBox icon={Speed} text="Speed of Use" />
          </HStack>
        </Stack>
      </Box>

      <AboutSection />

      <FaqSection />

      <CtaSection />
    </Stack>
  );
};

export default Home;
