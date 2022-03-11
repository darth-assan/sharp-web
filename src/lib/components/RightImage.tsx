import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

const RightImage = ({
  no,
  title,
  subtitle,
  arrow = true,
}: {
  no?: number;
  title: string;
  subtitle: string;
  arrow?: boolean;
}) => {
  return (
    <Box pos="relative">
      <HStack spacing="4rem" justify="space-between">
        <Heading as="h3" fontSize={{ md: "6xl" }}>
          {no ?? 1}
        </Heading>

        <HStack align="center" justify="space-between" w={{ md: 140 }}>
          <Box w={{ md: "40%" }} pos="relative" mt={-28}>
            <Image src="/images/mobile.png" h={{ md: 117 }} />
          </Box>
          <Box w={{ md: "60%" }}>
            <Heading>{title}</Heading>
            <Box w={{ md: 85 }}>
              <Text>{subtitle}</Text>
            </Box>
          </Box>
        </HStack>
      </HStack>
      {arrow && (
        <Flex justify="start" ml={{ md: 48 }}>
          <Image src="/images/to-right.png" />
        </Flex>
      )}
    </Box>
  );
};

export default RightImage;
