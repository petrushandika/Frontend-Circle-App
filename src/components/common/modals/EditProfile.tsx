import { useRef, useState } from "react";
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
  Input,
  Avatar,
} from "@chakra-ui/react";
import HollowButton from "../button/HollowButton";
import HollowInput from "../input/HollowInput";
import CardHeader from "../card/CardHeader";
import SolidButton from "../button/SolidButton";
import { UserDTO } from "../../../types/UserDTO";
import { UserEntity } from "../../../types/UserEntity";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../features/auth/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../../configs/Api";
import { AxiosError } from "axios";

interface EditProfileProps {
  refetch: () => void;
}

export default function EditProfile({ refetch }: EditProfileProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const { user } = useAuth();
  const { register, handleSubmit } = useForm<UserDTO>({ mode: "onSubmit" });

  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const { mutateAsync } = useMutation<UserEntity, AxiosError, UserDTO>({
    mutationFn: async (updatedUser) => {
      console.log(updatedUser);
      
      const formData = new FormData();
      if (updatedUser.avatar && updatedUser.avatar.length > 0) {
        formData.append("avatar", updatedUser.avatar[0]);
      }
      const userId = Number(user.id);
      formData.append("fullName", updatedUser.fullName);
      formData.append("username", updatedUser.username);
      if (updatedUser.bio) formData.append("bio", updatedUser.bio);
      const response = await api.patch(`/users/${userId}`, formData);
      return response.data;
    },
  });

  const onSubmit: SubmitHandler<UserDTO> = async (data) => {
    try {
      await mutateAsync(data);
      console.log("Success User Profile!");
      refetch();
      onClose();
    } catch (error) {
      console.error("Failed User Profile!", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImageSrc(undefined);
    }
  };
  

  return (
    <>
      <HollowButton
        text="Edit Profile"
        onClick={onOpen}
        width="100%"
        height="33px"
        fontSize=".9rem"
      />

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#1D1D1D">
          <ModalCloseButton color="#FFF" />
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)} width="100%">
            <ModalBody p={6}>
              <Box
                w="100%"
                overflow="hidden"
                maxW="100%"
                h="fit-content"
                background=""
                borderRadius={5}
              >
                <VStack>
                  <CardHeader text="Edit Profile" fontSize="1rem" />
                  <Box position="relative" w="100%">
                    <Image
                      src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      width="100%"
                      height="100px"
                      objectFit="cover"
                      borderRadius={5}
                    />
                    <Flex
                      position="absolute"
                      top="70%"
                      left="5%"
                      direction="column"
                      alignItems="center"
                    >
                      <Box position="relative" cursor="pointer">
                        <Avatar src={imageSrc} size="md" />
                        <Input
                          type="file"
                          accept="image/*"
                          opacity={0}
                          position="absolute"
                          top={0}
                          left={0}
                          width="100%"
                          height="100%"
                          cursor="pointer"
                          borderRadius="50%"
                          {...register("avatar")}
                          onChange={e => {
                            handleImageChange(e)
                            register("avatar").onChange(e)
                          }}
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <VStack width="100%" color="#FFF" pt={10}>
                    <HollowInput
                      pl={3}
                      borderRadius={7}
                      placeholder="Name"
                      {...register("fullName")}
                    />
                    <HollowInput
                      pl={3}
                      borderRadius={7}
                      placeholder="Username"
                      {...register("username")}
                    />
                    <HollowInput
                      pl={3}
                      borderRadius={7}
                      placeholder="Bio"
                      {...register("bio")}
                    />
                  </VStack>
                </VStack>
              </Box>
            </ModalBody>
            <ModalFooter>
              <HStack
                width="100%"
                justifyContent="flex-end"
                borderTop="1px solid #3F3F3F"
                pt={5}
              >
                <SolidButton
                  type="submit"
                  text="Save"
                  width="75px"
                  height="33px"
                  fontSize=".9rem"
                />
              </HStack>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}
