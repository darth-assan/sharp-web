import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, FormErrorMessage } from "@chakra-ui/react";
import Select from "react-select";

interface OptionProps {
  readonly value: string;
  readonly label: string;
}

export interface LabeledSelectFieldProps
  extends ComponentPropsWithoutRef<typeof Input> {
  /** Field name. */
  name: string;
  /** Field label. */
  label: string;
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number" | "tel" | "file";
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
  labelProps?: ComponentPropsWithoutRef<"label">;
  options: readonly OptionProps[];
}

const FormSelect = forwardRef<HTMLInputElement, LabeledSelectFieldProps>(
  ({ label, outerProps, labelProps, name, options }) => {
    const {
      formState: { isSubmitting, errors },
      control,
    } = useFormContext();
    const error = Array.isArray(errors[name])
      ? errors[name].join(", ")
      : errors[name]?.message || errors[name];

    return (
      <FormControl {...outerProps}>
        <Flex align="center" justify="space-between">
          <FormLabel fontSize="sm" color="gray.500" {...labelProps}>
            {label}
          </FormLabel>
        </Flex>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select {...field} options={options} isDisabled={isSubmitting} />
          )}
        />
        {error && (
          <FormErrorMessage fontSize="sm" role="alert" color="red.500">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);

export default FormSelect;
