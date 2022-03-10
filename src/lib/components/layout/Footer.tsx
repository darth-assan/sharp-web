import {
  Flex,
  Grid,
  Icon,
  Image,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

import { Button } from "../reusable/Button";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      // align="center"
      bg="black"
      py={{ base: 10, md: 20 }}
      px={{ base: 5, md: 48 }}
      direction="column"
      color="white"
    >
      <Grid
        templateColumns={{ md: "repeat(4, 1fr)" }}
        gap={10}
        alignItems="center"
      >
        <Stack spacing="0.2rem">
          <Image
            src="/images/sharp-footer-logo.png"
            alt="sharp logo"
            h={16}
            w={32}
          />
        </Stack>

        <Stack>
          <Stack as={List} fontSize="sm">
            <ListItem>About Us</ListItem>
            <ListItem>Request a Serpro</ListItem>
            <ListItem>Become a Serpro</ListItem>
          </Stack>
        </Stack>

        <Stack>
          <Stack as={List} fontSize="sm">
            <ListItem>Home</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </Stack>
        </Stack>

        <Stack justifyContent="space-between" spacing={{ base: 10, md: 24 }}>
          <Button
            title="Contact Us"
            rightIcon={<Icon as={BsArrowRight} />}
            color="black"
          />
        </Stack>
      </Grid>
    </Flex>
  );
};

export default Footer;
