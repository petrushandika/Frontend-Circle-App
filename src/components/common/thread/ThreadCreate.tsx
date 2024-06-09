import { HStack, Box, Image, Input, FormControl } from "@chakra-ui/react";
import SolidButton from "../button/SolidButton";
import { ThreadDTO } from "../../../types/ThreadDTO";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../configs/Api";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { ThreadEntity } from "../../../types/ThreadEntity";
import useAuth from "../../../features/auth/hooks/useAuth";

export default function ThreadCreate({ refetch }: { refetch: () => void }) {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm<ThreadDTO>({
    mode: "onSubmit",
  });

  const { mutateAsync } = useMutation<ThreadEntity, AxiosError, ThreadDTO>({
    mutationFn: async (newThread) => {
      const formData = new FormData();
      formData.append("content", newThread.content);
      const userId = Number(user.id);
      formData.append("userId", String(userId));
      if (newThread.image && newThread.image.length > 0) {
        formData.append("image", newThread.image[0]);
      }
      const response = await api.post("/threads", formData);
      return response.data;
    },
  });

  const onSubmit: SubmitHandler<ThreadDTO> = async (data) => {
    try {
      await mutateAsync(data);
      console.log("Success Upload Thread!");
      refetch();
    } catch (error) {
      console.log("Failed Upload Thread!:", error);
    }
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)} width="100%">
      <HStack justifyContent="space-between" padding={5}>
        <HStack>
          <Input
            placeholder="What is happening?!"
            variant="unstyled"
            fontSize={".9rem"}
            width={"100%"}
            {...register("content")}
          />
        </HStack>
        <HStack spacing={2}>
          <Box position="relative" cursor="pointer" width="100%">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3039/3039527.png"
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
              {...register("image")}
            />
          </Box>
          <SolidButton
            type="submit"
            text="Post"
            width="100%"
            height="33px"
            fontSize=".9rem"
          />
        </HStack>
      </HStack>
    </FormControl>
  );
}
