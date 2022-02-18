import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BounceLoader } from "react-spinners";
import ReactStars from "react-rating-stars-component";

import FileUpload from "../lib/components/form/FileUpload";
import Form from "../lib/components/form/Form";
import FormInput from "../lib/components/form/FormInput";
import FormSelect from "../lib/components/form/FormSelect";
import FormTextarea from "../lib/components/form/FormTextarea";
import { Button } from "../lib/components/reusable/Button";
import AuthHeader from "../lib/styles/customTheme/components/AuthHeader";

const Request = () => {
  const [state, setState] = React.useState(0);

  const handleClick = () => {
    setState((prevState) => prevState + 1);
  };

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };

  const renderTemplate = (value: number) => {
    switch (value) {
      case 0:
        return (
          <FormSelect
            name="category"
            label="Job Category"
            options={[{ value: "electricity", label: "Electricity" }]}
            placeholder="Select a category"
          />
        );
      case 1:
        return (
          <FormInput
            name="location"
            label="Job Location"
            placeholder="University Staff Bungalows"
          />
        );
      case 2:
        return (
          <FormTextarea
            name="description"
            label="Describe your problem"
            helper="(Please be as vivid as possible with your description)"
            placeholder="Eg: Faulty airconditioner"
          />
        );
      case 3:
        return (
          <FileUpload
            label="Add a photo"
            name="photo"
            helper="(Please provide images with a clear shot of the problem)"
          />
        );
      case 4:
        return (
          <Stack align="center" justify="center">
            <BounceLoader color="#FCC201" size={200} />
            <Text fontSize="sm">Hold on, this may take a while</Text>
          </Stack>
        );
      case 5:
        return (
          <Stack spacing="2rem">
            <Stack>
              <Heading>Job Details</Heading>
              <Image src="/images/home.png" alt="home" />
              <Text>Kwame Ntim</Text>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#FCC201"
              />
            </Stack>

            <Progress
              value={50}
              colorScheme="primaryButton"
              bg="brand.accent"
            />

            <Stack spacing="1.5rem">
              <Box>
                <Heading as="h5" fontSize="lg">
                  Job Type
                </Heading>
                <Text fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </Text>
              </Box>

              <Box>
                <Heading as="h5" fontSize="lg">
                  Job Location
                </Heading>
                <Text fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </Text>
              </Box>

              <Box>
                <Heading as="h5" fontSize="lg">
                  Job Description
                </Heading>
                <Text fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper sed consectetur arcu at velit. Et vel integer amet
                  curabitur egestas diam blandit vel. Lorem sapien, neque donec
                  sollicitudin. Justo, venenatis sit tellus et. Viverra etiam
                  maecenas ac turpis aliquam, eget velit maecenas. Donec quis mi
                  aliquam cursus mauris. Mauris risus sed auctor fringilla
                  rhoncus tortor sed. Egestas dignissim donec ornare id
                  pellentesque commodo. Dui morbi ullamcorper in iaculis erat
                  tincidunt.
                </Text>
              </Box>
            </Stack>
          </Stack>
        );
      default:
        return null;
    }
  };

  return (
    <Stack spacing="2rem">
      <Stack spacing="3rem" padding="8" w={{ md: 108 }} mx="auto">
        <Stack spacing="1.5rem">
          <AuthHeader
            title="Request A Serpro!"
            subtitle="Follow the steps to request for a serpro"
            spacing="0.2rem"
            align="center"
            justify="center"
          />
          <HStack spacing="1rem" align="center" justify="center">
            {Array.from(Array(4).keys()).map((item) => (
              <Flex
                align="center"
                justify="center"
                w={5}
                h={5}
                rounded="full"
                borderWidth={1}
                borderColor="brand.primary"
                key={item}
              >
                <Box
                  w={4}
                  h={4}
                  rounded="full"
                  bg={state === item ? "brand.primary" : "white"}
                />
              </Flex>
            ))}
          </HStack>
        </Stack>

        <Form onSubmit={(values) => console.log(values)}>
          <Stack spacing="2rem">
            {renderTemplate(state)}
            <Button
              title="Next"
              colorScheme="primaryButton"
              color="black"
              w="full"
              onClick={handleClick}
            />
          </Stack>
        </Form>
      </Stack>

      <HStack bg="brand.accent" p={6} align="center" justify="space-between">
        <Image src="/images/symbol.png" />
        <Image src="/images/symbol.png" />
        <Image src="/images/symbol.png" />
        <Image src="/images/symbol.png" />
      </HStack>
    </Stack>
  );
};

export default Request;
