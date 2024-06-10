import { Input } from "@chakra-ui/react";
import { InputProps } from "../../../types/Types";
import React from "react";

const HollowInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      borderRadius = 25,
      pl = 10,
      placeholder = "Search your friend",
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <Input
        placeholder={placeholder}
        border="1px solid #545454"
        borderRadius={borderRadius}
        focusBorderColor="#04A51E"
        pl={pl}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

HollowInput.displayName = "HollowInput";

export default HollowInput;
