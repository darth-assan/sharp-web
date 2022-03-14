import { Icon, Stack, Text } from "@chakra-ui/react";

const IconBox = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <Stack textAlign="center" align="center">
      <Icon as={icon} boxSize={16} />
      <Text
        fontSize={{ md: "lg" }}
        css={{
          "::first-letter": {
            fontWeight: 900,
          },
        }}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default IconBox;
