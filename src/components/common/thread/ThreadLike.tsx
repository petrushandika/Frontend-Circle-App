import { HStack, Text, FormControl } from "@chakra-ui/react";
import { LoveIcon } from "../icon/Icon";
import { LikeDTO } from "../../../types/LikeDTO";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../configs/Api";
import { AxiosError } from "axios";
import useAuth from "../../../features/auth/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { LikeEntity } from "../../../types/LikeEntity";
import { useEffect, useState } from "react";

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

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLikeStatus = async () => {
      try {
        const response = await api.get(`/likes/`, {
          params: { threadId, userId: user.id },
        });
        setLiked(!!response.data);
      } catch (error) {
        console.error("Error checking like status:", error);
      }
    };
    checkLikeStatus();
  }, [threadId, user.id]);

  const { mutateAsync } = useMutation<LikeEntity, AxiosError, LikeDTO>({
    mutationFn: async () => {
      const userId = Number(user.id);
      if (!liked) {
        const body = {
          threadId,
          userId,
        };
        const response = await api.post("/likes", body);
        return response.data;
      } else {
        const response = await api.delete("/likes", {
          data: { threadId, userId },
        });
        return response.data;
      }
    },
  });

  const onSubmit: SubmitHandler<LikeDTO> = async (data) => {
    try {
      await mutateAsync(data);
      console.log(liked ? "Success Unlike Thread!" : "Success Like Thread!");
      refetch();
      setLiked(!liked);
    } catch (error) {
      console.error(
        liked ? "Failed To Unlike The Thread:" : "Failed To Like The Thread:",
        error
      );
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
        <LoveIcon color={liked ? "red" : "gray.500"} />
        <Text>{totalLikes}</Text>
      </HStack>
    </FormControl>
  );
}
