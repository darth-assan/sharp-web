import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import type { IconProps } from "@chakra-ui/react";
import { Flex, FormErrorMessage, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { forwardRef } from "react";
import type { PropsWithoutRef, ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

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
  icon?: IconProps;
}

export const FormInput = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, state, outerProps, icon, labelProps, name, ...props }) => {
    const {
      register,
      formState: { isSubmitting, errors },
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
          {state === "login" && (
            <NextLink href="/forgot-password" passHref>
              <Link
                _hover={{ textDecor: "none" }}
                _focus={{ outline: "none" }}
                color="gray.500"
                fontSize="sm"
                fontWeight="medium"
                textAlign="right"
                d="block"
                mt={-2}
              >
                Forgot your password?
              </Link>
            </NextLink>
          )}
        </Flex>
        <InputGroup>
          <Input
            w="full"
            rounded="sm"
            _placeholder={{ fontSize: "sm" }}
            _focus={{ borderColor: "primary.500" }}
            size="lg"
            disabled={isSubmitting}
            {...register(name)}
            {...props}
          />
          {icon && (
            <InputRightElement>
              <Icon as={icon} color="primary.500" />
            </InputRightElement>
          )}
        </InputGroup>
        {error && (
          <FormErrorMessage fontSize="sm" role="alert" color="red.500">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);

export default FormInput;
