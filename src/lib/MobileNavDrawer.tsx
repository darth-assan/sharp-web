import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { BsInfoCircle } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineLogin, HiSupport } from "react-icons/hi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";

import { Button } from "./components/reusable/Button";

const links = [
  { id: 1, title: "Home", path: "/", icon: SiHomebridge },
  { id: 2, title: "Support", path: "/support", icon: HiSupport },
  { id: 3, title: "About us", path: "/about", icon: BsInfoCircle },
  {
    id: 4,
    title: "Request",
    path: "/request",
    icon: MdOutlineHomeRepairService,
  },
  { id: 5, title: "Sign In", path: "/auth/signin", icon: HiOutlineLogin },
];

const MobileNavDrawer = ({ onClose }: { onClose: () => void }) => {
  const { pathname } = useRouter();

  return (
    <Flex
      justify="space-between"
      direction="column"
      h="100vh"
      bg="white"
      w="80%"
      p={6}
    >
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

        <Stack as={List} spacing="1.5rem">
          {links.map((link) => (
            <ListItem
              key={link.id}
              d="flex"
              alignItems="center"
              color={link.path === pathname ? "brand.primary" : "gray.600"}
            >
              <ListIcon as={link.icon} />
              <NextLink href={link.path} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link
                  d="block"
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

      <NextLink href="/auth/signup" passHref>
        <Link _hover={{ textDecor: "none" }}>
          <Button title="Become a sepro" color="black" onClick={onClose} />
        </Link>
      </NextLink>
    </Flex>
  );
};

export default MobileNavDrawer;
