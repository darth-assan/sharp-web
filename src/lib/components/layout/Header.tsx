import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BiMenu } from "react-icons/bi";

const Header = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="space-between"
      px={{ base: 2, md: 20 }}
      h={{ md: 20 }}
      bg="black"
      color="white"
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src="/images/sharp-logo.png" alt="Sharp Logo" />
        </Link>
      </NextLink>

      <HStack spacing="3rem" d={{ base: "none", md: "flex" }}>
        <NextLink href="/" passHref>
          <Link _hover={{ textDecor: "none" }}>Home</Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link _hover={{ textDecor: "none" }}>About Us</Link>
        </NextLink>
        <NextLink href="/become-sepro" passHref>
          <Link _hover={{ textDecor: "none" }}>Become a Serpro</Link>
        </NextLink>
        <NextLink href="/request" passHref>
          <Link _hover={{ textDecor: "none" }}>Request a Serpro</Link>
        </NextLink>
        <NextLink href="/support" passHref>
          <Link _hover={{ textDecor: "none" }}>Help</Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link _hover={{ textDecor: "none" }}>Contact Us</Link>
        </NextLink>
      </HStack>

      <Box marginLeft="auto" d={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="menu toggle"
          icon={<Icon as={BiMenu} boxSize={6} />}
          variant="ghost"
          colorScheme="primary"
          onClick={onOpen}
        />
      </Box>
    </Flex>
  );
};

export default Header;
