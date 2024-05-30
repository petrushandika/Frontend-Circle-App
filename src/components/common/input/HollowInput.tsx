import { Input } from "@chakra-ui/react";
import { InputProps } from "../../../types/Types";


export default function HollowInput({ borderRadius = 25, pl = 10, placeholder = "Search your friend" }: InputProps) {
  return (
    <Input
      placeholder={placeholder}
      border={"1px solid #545454"}
      borderRadius={borderRadius}
      focusBorderColor="#04A51E"
      pl={pl}
    />
  );
}
