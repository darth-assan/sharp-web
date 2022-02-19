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
            Sharp! is an online platform that facilitates fast and convenient
            on-demand service transactions by connecting customers with local
            service professionals (Serpros) in need of mainly home and office
            services. It is designed to address the challenges faced by
            Customers in obtaining secure and reliable professionals. Sharp!
            offers the benefits of finding skilled, experienced and trusted
            individuals at optimum costs. Customers can choose from a variety of
            professions and services like construction-related services &
            repairs, gardening, cleaning, automobile and beauty-related services
            etc.
          </Text>
        </Stack>

        <Stack>
          <Heading as="h2" fontSize="2xl">
            Who is behind Sharp!?
          </Heading>
          <Text>
            Sharp! is a technological initiative of DonWudi Investment. Ing.
            Philip Lartey is the CEO/Founder of DonWudi Investment and has over
            34 years of active working experience In the public sector. He has
            performed numerous senior roles in road engineering and finance
            areas. In the private sector, he has undertaken many consultancy
            assignments in the construction landscape. He is an astute
            entrepreneur with an eye for developing opportunities.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
