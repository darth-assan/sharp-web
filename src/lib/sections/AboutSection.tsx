import { Box, Stack } from "@chakra-ui/react";

import AboutItem from "../pages/home/components/AboutItem";

const AboutSection = () => {
  return (
    <Box
      as="section"
      id="about"
      bg="brand.primary"
      p={{ base: 6, md: 24 }}
      py={{ base: 20, md: 24 }}
    >
      <Stack spacing={{ base: "5rem", md: "8rem" }} w={{ md: "85%" }} mx="auto">
        <AboutItem
          title="What is Sharp?"
          text="Sharp is an online platform that facilitates fast and convenient on-demand service transactions by connecting customers with local service professionals (SerPros) in need of mainly home and office services. It is designed to address the challenges faced by Customers in obtaining secure and reliable professionals. Sharp! offers the benefits of finding skilled, experienced and trusted individuals at optimum costs. Customers can choose from a variety of professions and services like construction-related services & repairs, gardening, cleaning, automobile and beauty-related services etc."
          img="hero.jpg"
          flexDirection={{ base: "column", md: "row" }}
        />
        <AboutItem
          title="More About SHARP"
          text="Sharp! is a technological initiative of DonWudi Investment. Ing. Philip Lartey is the CEO/Founder of DonWudi Investment and has over 34 years of active working experience in the public sector. He has performed numerous senior roles in road engineering and finance areas. In the private sector, he has undertaken many consultancy assignments in the construction landscape. He is an astute entrepreneur with an eye for developing opportunities."
          img="hero.jpg"
          flexDirection={{ base: "column", md: "row-reverse" }}
        />
      </Stack>
    </Box>
  );
};

export default AboutSection;
