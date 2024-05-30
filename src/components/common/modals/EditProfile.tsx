import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  useDisclosure,
  Box,
  Image,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import HollowButton from "../button/HollowButton";
import HollowInput from "../input/HollowInput";
import CardHeader from "../card/CardHeader";
import ImageCard from "../card/CardImage";
import SolidButton from "../button/SolidButton";

export default function NewThread() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <HollowButton
        text="Edit Profile"
        onClick={onOpen}
        width={"100%"}
        height={"33px"}
        fontSize={".9rem"}
      />

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"#1D1D1D"}>
          <ModalCloseButton color={"#FFF"} />
          <ModalBody p={6}>
            <FormControl>
              <Box
                w="100%"
                overflow="hidden"
                maxW="100%"
                h="fit-content"
                background={""}
                borderRadius={5}
              >
                <VStack>
                  <CardHeader text="Edit Profile" fontSize={"1rem"} />
                  <Box position="relative" w="100%">
                    <Image
                      src="../../../../public/images/sunset.jpg"
                      width={"100%"}
                      height={"100px"}
                      objectFit={"cover"}
                      borderRadius={5}
                    />
                    <Flex position="absolute" top="70%" left="5%">
                      <ImageCard src="../../../../public/images/bill.jpeg" />
                    </Flex>
                  </Box>
                  <VStack width={"100%"} color={"#FFF"} pt={10}>
                    <HollowInput pl={3} borderRadius={7} placeholder="Name" />
                    <HollowInput pl={3} borderRadius={7} placeholder="Username"/>
                    <HollowInput pl={3} borderRadius={7} placeholder="Bio"/>
                  </VStack>
                </VStack>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack
              width={"100%"}
              justifyContent={"flex-end"}
              borderTop={"1px solid #3F3F3F"}
              pt={5}
            >
              <SolidButton
                text="Save"
                width={"75px"}
                height={"33px"}
                fontSize={".9rem"}
              />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
