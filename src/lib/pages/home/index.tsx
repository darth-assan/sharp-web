import { Box, Heading, HStack, Stack } from "@chakra-ui/react";
import { FiRefreshCcw } from "react-icons/fi";

import IconBox from "../../components/IconBox";
import AboutSection from "../../sections/AboutSection";
import CtaSection from "../../sections/CTASection";
import FaqSection from "../../sections/FAQSection";
import HomeHeader from "../../sections/HomeHeader";
import { HandyTool, Speed } from "../../styles/icons";

const Home = () => {
  const features = [
    { id: 1, icon: Speed, text: "Speed of Use" },
    { id: 2, icon: HandyTool, text: "Handy Tool" },
    { id: 2, img: "accessible", text: "Accessible Anytime" },
    { id: 2, icon: FiRefreshCcw, text: "Responsive" },
    { id: 2, img: "professional", text: "Professional Service" },
  ];

  return (
    <Stack spacing="0rem">
      <HomeHeader />

      <Box p={{ base: 6, md: 48 }} py={{ base: 20, md: 48 }}>
        <Stack textAlign="center" spacing="4rem" w={{ md: "65%" }} mx="auto">
          <Heading>Who We Are</Heading>

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
      </Box>

      <AboutSection />

      <FaqSection />

      <CtaSection />
    </Stack>
  );
};

export default Home;
