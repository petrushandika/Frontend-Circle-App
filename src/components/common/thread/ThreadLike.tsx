import { HStack, Text, FormControl } from "@chakra-ui/react";
import { LoveIcon } from "../icon/Icon";
import { LikeDTO } from "../../../types/LikeDTO";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../configs/Api";
import { AxiosError } from "axios";
import useAuth from "../../../features/auth/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { LikeEntity } from "../../../types/LikeEntity";

interface ThreadLikeProps {
  threadId: number;
  totalLikes: number;
  refetch: () => void;
}

export default function ThreadLike({
  threadId,
  totalLikes,
  refetch,
}: ThreadLikeProps) {
  const { user } = useAuth();
  const { handleSubmit } = useForm<LikeDTO>({
    mode: "onSubmit",
  });

  const { mutateAsync } = useMutation<LikeEntity, AxiosError, LikeDTO>({
    mutationFn: async () => {
      const userId = Number(user.id);
      const body = {
        threadId,
        userId,
      };
      const response = await api.post("/likes", body);
      return response.data;
    },
  });

  const onSubmit: SubmitHandler<LikeDTO> = async (data) => {
    try {
      await mutateAsync(data);
      console.log("Success Like Threads!");
      refetch();
    } catch (error) {
      console.error("Failed To Like The Threads:", error);
    }
  };

  return (
    <FormControl
      as="form"
      onClick={() => handleSubmit(onSubmit)()}
      width="100%"
      cursor="pointer"
    >
      <HStack>
        <LoveIcon />
        <Text>{totalLikes}</Text>
      </HStack>
    </FormControl>
  );
}
