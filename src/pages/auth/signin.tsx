import { Stack } from "@chakra-ui/react";

import Form from "../../lib/components/form/Form";
import FormPhone from "../../lib/components/form/FormPhone";
import { Button } from "../../lib/components/reusable/Button";
import AuthHeader from "../../lib/styles/customTheme/components/AuthHeader";

const Signin = () => {
  return (
    <Stack
      spacing="1rem"
      w={{ md: 120 }}
      mx="auto"
      mb={10}
      px={{ base: 6, md: 0 }}
    >
      <AuthHeader
        title="LOG IN"
        subtitle="Enter your account credentials to login"
        img="signin"
      />

      <Form onSubmit={(values) => values}>
        <Stack spacing="1.5rem" mt={6}>
          <FormPhone label="Phone Number" />
          <Button title="Login" colorScheme="primaryButton" color="black" />
        </Stack>
      </Form>
    </Stack>
  );
};

export default Signin;
