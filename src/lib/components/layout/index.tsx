import { Box, useDisclosure } from "@chakra-ui/react";
import type { ReactNode } from "react";

import MobileNavDrawer from "../../MobileNavDrawer";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box margin="0 auto" transition="0.5s ease-out" pos="relative">
      {isOpen && (
        <Box
          pos="fixed"
          inset={0}
          zIndex={10}
          bg="rgba(0,0,0,.5)"
          d={{ base: "block", md: "none" }}
        >
          <MobileNavDrawer onClose={onClose} />
        </Box>
      )}
      <Box margin="8">
        <Header onOpen={onOpen} />
      </Box>
      <Box as="main" marginTop={22}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
