import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext, Controller } from "react-hook-form";
import type { FieldValues, Control } from "react-hook-form";

export const DropzoneField = ({
  onChange,
  name,
  label,
  helper,
  ...rest
}: {
  onChange: (...event: any[]) => void;
  name: string;
  label: string;
  helper: string;
}) => {
  const { register, unregister, setValue, watch } = useFormContext();
  const files: File[] = watch(name);
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      setValue(name, acceptedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <FormControl {...getRootProps()}>
      <Stack spacing="1.2rem">
        <Stack spacing="-0.8rem">
          <FormLabel fontSize="sm" color="gray.500" htmlFor={name}>
            {label}
          </FormLabel>
          <FormHelperText fontSize="xs">{helper}</FormHelperText>
        </Stack>
        <input id={name} {...rest} {...getInputProps({ onChange })} />
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
          {!files && <Text fontSize="sm">Drop the files here ...</Text>}
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
      </Stack>
    </FormControl>
  );
};

const FileUpload = ({
  name,
  control,
  label,
  helper,
  ...rest
}: {
  name: string;
  label: string;
  helper: string;
  control?: Control<FieldValues>;
}) => {
  // const { control } = useFormContext();

  return (
    <Controller
      render={({ field: { onChange } }) => (
        <DropzoneField
          label={label}
          helper={helper}
          name={name}
          onChange={(e: any) => onChange(e.target.files[0])}
          {...rest}
        />
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};

export default FileUpload;
