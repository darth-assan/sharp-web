import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { Button } from "./reusable/Button";

const Dum = () => {
  return (
    <HStack spacing="2rem" d={{ base: "none", md: "flex" }}>
      <NextLink href="/auth/signin" passHref>
        <Link _hover={{ textDecor: "none" }}>
          <Button title="Log In" variant="outline" />
        </Link>
      </NextLink>
      <NextLink href="/auth/signup" passHref>
        <Link _hover={{ textDecor: "none" }}>
          <Button title="Sign Up" color="black" />
        </Link>
      </NextLink>
    </HStack>
  );
};

export default Dum;
