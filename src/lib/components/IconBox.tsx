import { Icon, Image, Stack, Text } from "@chakra-ui/react";

const IconBox = ({
  icon,
  text,
  img,
}: {
  icon?: any;
  text: string;
  img?: string;
}) => {
  return (
    <Stack textAlign="center" align="center">
      {img ? (
        <Image w={16} h={16} src={`/images/${img}.png`} alt={text} />
      ) : (
        <Icon as={icon} boxSize={16} />
      )}
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
