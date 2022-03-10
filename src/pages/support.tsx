import { Stack, Box, Image, Flex } from "@chakra-ui/react";

import FAQ from "../lib/components/FAQ";
import Form from "../lib/components/form/Form";
import FormInput from "../lib/components/form/FormInput";
import FormTextarea from "../lib/components/form/FormTextarea";
import { Button } from "../lib/components/reusable/Button";
import { faqs } from "../lib/constant";
import AuthHeader from "../lib/styles/customTheme/components/AuthHeader";

const Support = () => {
  return (
    <Stack>
      <Box>
        <Image src="/images/hero.jpg" alt="" />
      </Box>

      <Stack>
        <Flex
          bg="brand.accent"
          p={{ base: 6, md: 48 }}
          py={{ base: 20, md: 28 }}
          align="center"
          justify="center"
          direction="column"
        >
          <Stack spacing="4rem">
            <AuthHeader
              title="How Can We Help You?"
              subtitle="Type in your message and we will be sure to get back to you!"
              textAlign="center"
            />
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
          </Stack>
        </Flex>

        <Box bg="white" py={{ md: 20 }}>
          <Stack
            w={{ md: 125 }}
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
