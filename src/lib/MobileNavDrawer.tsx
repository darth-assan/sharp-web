import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { GrFormClose } from "react-icons/gr";

const links = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Support", path: "/support" },
  { id: 3, title: "About us", path: "/about" },
  { id: 4, title: "Request", path: "/request" },
  { id: 5, title: "Sign In", path: "/auth/signin" },
  { id: 6, title: "Sign Up", path: "/auth/signup" },
];

const MobileNavDrawer = ({ onClose }: { onClose: () => void }) => {
  const { pathname } = useRouter();

  return (
    <Box h="100vh" bg="white" w="80%" p={6}>
      <Stack spacing="4rem">
        <HStack align="center" justify="space-between">
          <NextLink href="/" passHref>
            <Link _hover={{ textDecor: "none" }}>
              <Image src="/images/sharp-logo.png" alt="Sharp" />
            </Link>
          </NextLink>

          <IconButton
            variant="ghost"
            aria-label="close button"
            icon={<Icon as={GrFormClose} boxSize={6} />}
            onClick={onClose}
          />
        </HStack>

        <Stack as={List} spacing="1.2rem">
          {links.map((link) => (
            <ListItem key={link.id}>
              <NextLink href={link.path} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link
                  color={link.path === pathname ? "brand.primary" : "gray.600"}
                  fontWeight={link.path === pathname ? "bold" : "normal"}
                  onClick={onClose}
                >
                  {link.title}
                </Link>
              </NextLink>
            </ListItem>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileNavDrawer;
