import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  FormErrorMessage,
  FormHelperText,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export interface LabeledTextFieldProps
  extends ComponentPropsWithoutRef<typeof Input> {
  /** Field name. */
  name: string;
  /** Field label. */
  label: string;
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number" | "tel" | "file";
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
  labelProps?: ComponentPropsWithoutRef<"label">;
  state?: string;
  helper?: string;
}

export const FormTextarea = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, state, outerProps, labelProps, name, helper, ...props }) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext();
    const error = Array.isArray(errors[name])
      ? errors[name].join(", ")
      : errors[name]?.message || errors[name];

    return (
      <FormControl {...outerProps}>
        <Stack spacing="1.2rem">
          <Stack spacing="-0.8rem">
            <FormLabel fontSize="sm" color="gray.500" {...labelProps}>
              {label}
            </FormLabel>
            {helper && <FormHelperText fontSize="xs">{helper}</FormHelperText>}
          </Stack>
          <Textarea
            w="full"
            rounded="sm"
            _placeholder={{ fontSize: "sm" }}
            _focus={{ borderColor: "primary.500" }}
            size="lg"
            disabled={isSubmitting}
            {...register(name)}
            {...props}
          />
        </Stack>
        {error && (
          <FormErrorMessage fontSize="sm" role="alert" color="red.500">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);

export default FormTextarea;
