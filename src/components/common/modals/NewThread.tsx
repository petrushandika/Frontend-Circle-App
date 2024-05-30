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
  Input,
  Image,
  HStack,
} from "@chakra-ui/react";
import SolidButton from "../button/SolidButton";
import GhostInput from "../input/GhostInput";

export default function NewThread() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <SolidButton text="Create Post" onClick={onOpen} width={"100%"} />

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"#1D1D1D"}>
          <ModalCloseButton color={"#FFF"} />
          <ModalBody p={6}>
            <FormControl>
              <GhostInput />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack
              width={"100%"}
              justifyContent={"space-between"}
              borderTop={"1px solid #3F3F3F"}
              pt={5}
            >
              <Box position="relative" cursor="pointer" width={"100%"}>
                <Image
                  src="../../../../public/images/upload.png"
                  alt="Upload Icon"
                  boxSize={6}
                />
                <Input
                  type="file"
                  accept="image/*"
                  position="absolute"
                  top={0}
                  left={0}
                  opacity={0}
                  width="100%"
                  cursor="pointer"
                />
              </Box>
              <SolidButton
                text="Post"
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
