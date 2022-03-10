import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  ResponsiveValue,
} from "@chakra-ui/react";
import { Property } from "csstype";
import FlexDirection = Property.FlexDirection;

const AboutItem = ({
  title,
  text,
  img,
  flexDirection,
}: {
  title: string;
  text: string;
  img: string;
  flexDirection?: ResponsiveValue<FlexDirection>;
}) => {
  return (
    <HStack
      templateColumns={{ md: "repeat(2, 1fr)" }}
      gap={20}
      flexDirection={flexDirection}
    >
      <Stack spacing="1rem">
        <Heading>{title}</Heading>
        <Text>{text}</Text>
      </Stack>
      <Box>
        <Image src={`/images/${img}`} />
      </Box>
    </HStack>
  );
};

export default AboutItem;
