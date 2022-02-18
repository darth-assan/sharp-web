import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode, PropsWithoutRef } from "react";
import { useState } from "react";
import type { UseFormProps } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "../reusable/Button";

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode;
  /** Text to display in the submit button */
  submitText?: string;
  schema?: S;
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>;
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"];
  width?: string | number;
}

interface OnSubmitResult {
  FORM_ERROR?: string;
  [prop: string]: any;
}

export const FORM_ERROR = "FORM_ERROR";

function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  width = "full",
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const toast = useToast();
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  });
  const [formError, setFormError] = useState<string | null>(null);

  return (
    <FormProvider {...ctx}>
      <form
        onSubmit={ctx.handleSubmit(async (values) => {
          const result = (await onSubmit(values)) || {};
          // eslint-disable-next-line no-restricted-syntax
          for (const [key, value] of Object.entries(result)) {
            if (key === FORM_ERROR) {
              setFormError(value);
            } else {
              ctx.setError(key as any, {
                type: "submit",
                message: value,
              });
            }
          }
        })}
        className="form"
        {...props}
      >
        {/* Form fields supplied as children are rendered here */}
        {children}

        {formError &&
          toast({
            description: formError,
            position: "top-right",
            status: "error",
            duration: 5000,
          })}

        {submitText && (
          <Button
            type="submit"
            title={submitText}
            w={width}
            isLoading={ctx.formState.isSubmitting}
            disabled={ctx.formState.isSubmitting}
          />
        )}

        <style global jsx>{`
          .form > * + * {
            margin-top: 1rem;
          }
        `}</style>
      </form>
    </FormProvider>
  );
}

export default Form;
