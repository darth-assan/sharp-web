import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import FAQ from "../components/FAQ";
import { faqs } from "../constant";

const FaqSection = () => {
  return (
    <Box id="faq" bg="white" p={{ md: 24 }} py={{ base: 20, md: 36 }}>
      <Stack w={{ md: 122 }} maxW={{ md: 122 }} mx="auto" spacing="4rem">
        <Stack textAlign="center">
          <Heading>Frequently Asked Questions</Heading>
          <Text>
            Get answers to the frequently asked questions about SHARP!
          </Text>
        </Stack>

        <Box>
          {faqs.map((item) => (
            <FAQ key={item.id} title={item.title} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default FaqSection;
