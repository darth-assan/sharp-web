import React, { FC, useCallback, useEffect } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/form-control";

interface IFileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  helper?: string;
}

const FileUpload: FC<IFileInputProps> = (props) => {
  const { name, label = name, helper } = props;
  const { register, unregister, setValue, watch } = useFormContext();
  const files = watch(name);
  const onDrop = useCallback<DropzoneOptions["onDrop"]>(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  });
  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);
  return (
    <FormControl>
      <Stack spacing="1.2rem">
        <Stack spacing="-0.8rem">
          <FormLabel fontSize="sm" color="gray.500" htmlFor={name}>
            {label}
          </FormLabel>
          <FormHelperText fontSize="xs">{helper}</FormHelperText>
        </Stack>
        <div {...getRootProps()}>
          <input {...props} id={name} {...getInputProps()} />
          <Flex
            align="center"
            justify="center"
            w="full"
            borderWidth={1}
            borderStyle="dashed"
            borderColor="brand.primary"
            p={10}
            bg={isDragActive ? "gray.400" : "gray.50"}
          >
            <Text fontSize="sm">Drop the files here ...</Text>
            {!!files?.length && (
              <Grid templateColumns={{ base: "repeat(2, 1fr)" }} gap={4}>
                {files.map((file) => {
                  return (
                    <Box key={file.name}>
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </Box>
                  );
                })}
              </Grid>
            )}
          </Flex>
        </div>
      </Stack>
    </FormControl>
  );
};

export default FileUpload;
