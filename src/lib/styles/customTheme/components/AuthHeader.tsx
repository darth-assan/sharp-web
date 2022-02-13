import { Heading, Image, Stack, StackProps, Text } from "@chakra-ui/react";

const AuthHeader = ({
  title,
  subtitle,
  img,
  ...rest
}: {
  title: string;
  subtitle: string;
  img?: string;
} & StackProps) => {
  return (
    <Stack spacing="1rem" {...rest}>
      <Heading as="h2" fontSize="2xl">
        {title}
      </Heading>
      <Text>{subtitle}</Text>
      {img && <Image src={`/images/${img}.png`} alt={title} />}
    </Stack>
  );
};

export default AuthHeader;
