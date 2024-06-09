import { Input } from "@chakra-ui/react";
import { InputProps } from "../../../types/Types";
import React, { useEffect, useState, useCallback } from "react";
import debounce from "debounce";
import { api } from "../../../configs/Api";
import { User } from "../../../types/User";

interface HollowInputProps extends InputProps {
  onSearchResults: (results: User[]) => void;
}

const HollowInput = React.forwardRef<HTMLInputElement, HollowInputProps>(
  (
    {
      borderRadius = 25,
      pl = 10,
      placeholder = "Search your friend",
      type = "text",
      onSearchResults,
      ...props
    },
    ref
  ) => {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    };

    const fetchSearchResults = useCallback(
      async (searchQuery: string) => {
        try {
          const response = await api.get(`/users?search=${searchQuery}`);
          onSearchResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      },
      [onSearchResults]
    );

    useEffect(() => {
      const debouncedSearch = debounce(fetchSearchResults, 500);
      debouncedSearch(searchInput);
    }, [searchInput, fetchSearchResults]);

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
        onChange={handleInputChange}
      />
    );
  }
);

HollowInput.displayName = "HollowInput";

export default HollowInput;
