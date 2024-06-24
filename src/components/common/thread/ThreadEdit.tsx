import {
  HStack,
  Textarea,
  FormControl,
  VStack,
  Box,
  Image,
  Input,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import SolidButton from "../button/SolidButton";
import useAuth from "../../../features/auth/hooks/useAuth";
import { api } from "../../../configs/Api";
import { ThreadDTO } from "../../../types/ThreadDTO";
import { ThreadEntity } from "@/types/ThreadEntity";
import { Thread } from "../../../types/Thread";

interface ThreadEditProps {
  thread: Thread;
  refetch: () => void;
  onEdit: (updatedThread: Thread) => void;
}

export default function ThreadEdit({
  thread,
  refetch,
  onEdit,
}: ThreadEditProps) {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm<ThreadDTO>({
    mode: "onSubmit",
  });

  const { mutateAsync } = useMutation<ThreadEntity, AxiosError, ThreadDTO>({
    mutationFn: async (updatedThread) => {
      const formData = new FormData();
      formData.append("content", updatedThread.content);
      const userId = Number(user.id);
      formData.append("userId", String(userId));
      const threadId = Number(thread.id);
      const response = await api.patch(`/threads/${threadId}`, formData);
      return response.data;
    },
  });

  const onSubmit: SubmitHandler<ThreadDTO> = async (data) => {
    try {
      await mutateAsync(data);
      console.log("Success Edit Thread!");
      refetch();
      onEdit({
        ...thread,
        content: data.content,
      });
    } catch (error) {
      console.log("Failed Edit Thread!:", error);
    }
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)} width="100%">
      <HStack justifyContent="space-between" alignItems="flex-start">
        <VStack width={"100%"}>
          <Textarea
            placeholder="What is happening?!"
            variant="unstyled"
            fontSize={".9rem"}
            width={"100%"}
            resize="none"
            defaultValue={thread.content}
            {...register("content")}
          />
        </VStack>
        <HStack spacing={2} alignItems="center">
          <Box position="relative" cursor="pointer" width={"100%"}>
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
              height="100%"
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
