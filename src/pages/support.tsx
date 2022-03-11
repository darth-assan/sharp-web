import { Stack, Box, Flex, Heading, Text } from "@chakra-ui/react";

import FAQ from "../lib/components/FAQ";
import Form from "../lib/components/form/Form";
import FormInput from "../lib/components/form/FormInput";
import FormTextarea from "../lib/components/form/FormTextarea";
import { Button } from "../lib/components/reusable/Button";
import { faqs } from "../lib/constant";
import AuthHeader from "../lib/styles/customTheme/components/AuthHeader";

const Support = () => {
  return (
    <Stack spacing="0rem">
      <Flex
        align="center"
        justify="center"
        textAlign="center"
        bg="brand.primary"
        direction="column"
        py={{ md: 48 }}
      >
        <Stack spacing="1rem" w={{ md: 120 }}>
          <Heading as="h3" fontSize={{ md: "5xl" }}>
            Here to help &amp; listen
          </Heading>
          <Text>
            Get in touch if you have any enquiries or contact our support team
            in the app if you need help with using SHARP or registering as a
            service professional & more
          </Text>
        </Stack>
      </Flex>

      <Stack>
        <Flex
          bg="brand.accent"
          p={{ base: 6, md: 48 }}
          py={{ base: 20, md: 28 }}
          align="center"
          justify="center"
          direction="column"
        >
          <Form onSubmit={(values) => values}>
            <Stack spacing="1.5rem" w={{ md: 108 }}>
              <FormInput
                bg="white"
                name="name"
                label="Name"
                placeholder="John Doe"
              />
              <FormInput
                bg="white"
                name="phoneNumber"
                label="Phone Number"
                placeholder="555-555-5555"
                type="tel"
              />
              <FormInput
                bg="white"
                name="email"
                label="Email"
                placeholder="johndoe@email.com"
                type="email"
              />
              <FormTextarea
                bg="white"
                name="message"
                label="Message"
                placeholder="Type your message here..."
              />
              <Button
                title="Submit"
                colorScheme="primaryButton"
                color="black"
              />
            </Stack>
          </Form>
        </Flex>

        <Box bg="white" py={{ md: 20 }}>
          <Stack
            w={{ md: 122 }}
            maxW={{ md: 122 }}
            align="center"
            justify="center"
            mx="auto"
            spacing="4rem"
          >
            <AuthHeader
              title="Frequently Asked Questions"
              subtitle="Got a question? Here are some of our most frequently asked questions"
              textAlign="center"
            />

            <Box>
              {faqs.map((item) => (
                <FAQ key={item.id} title={item.title} />
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Support;
