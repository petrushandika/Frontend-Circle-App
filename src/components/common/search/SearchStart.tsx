import {
  Box,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "../icon/Icon";
import CardAccount from "../card/CardAccount";
import { useState, useEffect } from "react";
import { api } from "../../../configs/Api";
import { useDebounce } from "use-debounce";
import { User } from "../../../types/User";

export default function SearchStart() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearchInput] = useDebounce(searchInput, 500);
  const [searchData, setSearchData] = useState<User[]>([]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  async function getData() {
    try {
      const response = await api.get(`/users?search=${debouncedSearchInput}`);
      setSearchData(response.data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  }

  useEffect(() => {
    if (debouncedSearchInput) {
      getData();
    }
  }, [debouncedSearchInput]);

  return (
    <Box
      color={"#FFF"}
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      width={"100%"}
      overflow={"hidden"}
      height={"100vh"}
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <VStack width={"100%"} padding={5} gap={5}>
        <InputGroup width="100%" color="#B2B2B2" alignItems="center">
          <InputLeftElement pointerEvents="none" mr={5}>
            <SearchIcon />
          </InputLeftElement>
          <Input
            borderRadius={25}
            placeholder="Search..."
            onChange={handleChange}
            value={searchInput}
          />
        </InputGroup>

        {searchData.length > 0 ? (
          <VStack width={"100%"} gap={5}>
            {searchData.map((user) => (
              <CardAccount key={user.id} user={user} />
            ))}
          </VStack>
        ) : (
          <VStack
            color={"#FFF"}
            spacing={0}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100vh"}
          >
            <Text>Write and search something</Text>
            <Text fontSize={".8rem"} color={"#909090"}>
              Try searching for something else or check the spelling of what you
              typed.
            </Text>
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
