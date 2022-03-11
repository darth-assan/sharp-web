import type { BoxProps } from "@chakra-ui/react";
import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

const LeftImage = ({
  no,
  title,
  subtitle,
  top,
  arrow = true,
}: {
  no?: number;
  title: string;
  subtitle: string;
  top?: BoxProps["top"];
  arrow?: boolean;
}) => {
  return (
    <Box pos="relative">
      <HStack spacing="4rem" justify="space-between">
        <Heading as="h3" fontSize={{ md: "6xl" }}>
          {no ?? 1}
        </Heading>

        <HStack align="center" justify="space-between" w={{ md: 140 }}>
          <Box w={{ md: "60%" }}>
            <Heading>{title}</Heading>
            <Box w={{ md: 85 }}>
              <Text>{subtitle}</Text>
            </Box>
          </Box>
          <Box w={{ md: "40%" }} pos="relative" top={top}>
            <Image src="/images/mobile.png" h={{ md: 117 }} />
          </Box>
        </HStack>
      </HStack>
      {arrow && (
        <Flex justify="end" mr={{ md: 80 }}>
          <Image src="/images/to-left.png" />
        </Flex>
      )}
    </Box>
  );
};

export default LeftImage;
