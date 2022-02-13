import { Box, Flex, Icon, IconButton, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <NextLink href="/" passHref>
        <Link>
          <Image src="/images/sharp-logo.png" alt="Sharp Logo" />
        </Link>
      </NextLink>

      <Box marginLeft="auto">
        <IconButton
          aria-label="menu toggle"
          icon={<Icon as={BiMenu} boxSize={6} />}
          variant="ghost"
          colorScheme="primary"
        />
      </Box>
    </Flex>
  );
};

export default Header;
