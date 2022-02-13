import React from "react";
import AuthHeader from "../lib/styles/customTheme/components/AuthHeader";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Stack,
  Box,
} from "@chakra-ui/react";
import Form from "../lib/components/form/Form";
import FormInput from "../lib/components/form/FormInput";
import FormTextarea from "../lib/components/form/FormTextarea";
import { Button } from "../lib/components/reusable/Button";

const Support = () => {
  return (
    <Stack spacing="2rem" margin="8" divider={<Divider />}>
      <AuthHeader
        title="How Can We Help You?"
        subtitle="Type in your message and we will be sure to get back to you!"
      />

      <Form onSubmit={(values) => console.log(values)}>
        <Stack spacing="1.5rem">
          <FormInput name="name" label="Name" placeholder="John Doe" />
          <FormInput
            name="email"
            label="Email"
            placeholder="johndoe@email.com"
            type="email"
          />
          <FormTextarea
            name="message"
            label="Message"
            placeholder="Type your message here..."
          />
          <Button title="Submit" colorScheme="primaryButton" color="black" />
        </Stack>
      </Form>

      <Stack spacing="1.5rem">
        <AuthHeader
          title="FAQs"
          subtitle="Got a question? Here are some of our most frequently asked questions"
        />

        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default Support;
