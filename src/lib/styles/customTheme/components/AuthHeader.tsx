import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const AuthHeader = ({
  title,
  subtitle,
  img,
  image,
  ...rest
}: {
  title: string;
  subtitle: string;
  img?: string;
  image?: string;
} & StackProps) => {
  return (
    <Stack spacing="1rem" {...rest}>
      {image && <Image rounded="md" src={`/images/${image}`} alt={title} />}
      <MotionHeading
        as="h2"
        fontSize="2xl"
        initial={{ opacity: 0, x: -300 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3, ...transition },
        }}
      >
        {title}
      </MotionHeading>
      <MotionText
        initial={{ opacity: 0, x: -300 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.6, ...transition },
        }}
      >
        {subtitle}
      </MotionText>
      {img && (
        <Image src={`/images/${img}.png` || `/images/${image}`} alt={title} />
      )}
    </Stack>
  );
};

export default AuthHeader;
