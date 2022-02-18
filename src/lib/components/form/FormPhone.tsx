import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormPhone = ({ label }: { label: string }) => {
  const [phone, setPhone] = React.useState("");
  return (
    <FormControl>
      <FormLabel fontSize="sm" fontWeight="bold">
        {label}
      </FormLabel>
      <PhoneInput
        country="gh"
        value={phone}
        onChange={(formattedValue) => setPhone(formattedValue)}
      />
    </FormControl>
  );
};

export default FormPhone;
