import { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface HollowInputProps {
  text: string;
}

export default function HollowInput({ text }: HollowInputProps) {
  const [inputValue, setInputValue] = useState(text);

  return (
    <InputGroup width={"100%"}>
      <InputLeftElement pointerEvents="none" mr={5}>
        <FontAwesomeIcon icon={faUser} color="#B2B2B2" />
      </InputLeftElement>
      <Input
        width={"100%"}
        color={"#B2B2B2"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        backgroundColor={"transparent"}
        border={"1px solid #B2B2B2"}
        borderRadius={25}
        _hover={{ backgroundColor: "none" }}
        fontWeight={"300"}
      />
    </InputGroup>
  );
}
