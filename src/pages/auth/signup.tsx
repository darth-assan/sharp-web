import { Stack } from "@chakra-ui/react";

import Form from "../../lib/components/form/Form";
import FormInput from "../../lib/components/form/FormInput";
import FormPhone from "../../lib/components/form/FormPhone";
import { Button } from "../../lib/components/reusable/Button";
import AuthHeader from "../../lib/styles/customTheme/components/AuthHeader";

const Signup = () => {
  return (
    <Stack
      spacing="1rem"
      w={{ md: 120 }}
      mx="auto"
      mb={10}
      px={{ base: 6, md: 0 }}
    >
      <AuthHeader
        title="SIGN UP"
        subtitle="Fill the form below to create an account"
        img="signup"
      />
      <Form onSubmit={(values) => values}>
        <Stack spacing="1.5rem" mt={6}>
          <FormInput name="firstName" label="First Name" placeholder="John" />
          <FormInput name="lastName" label="Last Name" placeholder="Doe" />
          <FormPhone label="Phone Number" />
          <Button title="Sign Up" colorScheme="primaryButton" color="black" />
        </Stack>
      </Form>
    </Stack>
  );
};

export default Signup;
