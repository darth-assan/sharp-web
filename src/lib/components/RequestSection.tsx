import type { ResponsiveValue } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Property } from "csstype";

import FlexDirection = Property.FlexDirection;

const RequestSection = ({
  title,
  text,
  image,
  flexDirection,
  icon,
  ...props
}: {
  title: string;
  text: string;
  image: string;
  icon: any;
  flexDirection?: ResponsiveValue<FlexDirection>;
}) => {
  return (
    <HStack
      d={{ base: "block", md: "flex" }}
      justify="space-between"
      flexDirection={flexDirection}
      {...props}
    >
      <Stack w={{ md: 108 }}>
        <Flex
          w={12}
          h={12}
          align="center"
          justify="center"
          rounded="full"
          bg="brand.primary"
          filter="drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))"
        >
          <Icon as={icon} boxSize={7} />
        </Flex>
        <Heading as="h4" fontSize={{ base: "xl", md: "3xl" }}>
          {title}
        </Heading>
        <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
          {text}
        </Text>
      </Stack>

      <Box w={{ md: 115 }} h={{ md: 80 }} pt={{ base: 10, md: 0 }}>
        <Image
          src={`/images/${image}.jpg`}
          h="full"
          w="full"
          rounded="lg"
          fit="cover"
        />
      </Box>
    </HStack>
  );
};

export default RequestSection;
