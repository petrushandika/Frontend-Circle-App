import { HStack, VStack, Text, FormControl } from "@chakra-ui/react";
import CardImage from "./CardImage";
import HollowButton from "../button/HollowButton";
import { User } from "../../../types/User";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../configs/Api";
import useAuth from "../../../features/auth/hooks/useAuth";
import { FollowEntity } from "../../../types/FollowEntity";
import { AxiosError } from "axios";
import { FollowDTO } from "../../../types/FollowDTO";

interface UserProps {
  user: User;
  refetch: () => void;
}

export default function CardAccount({ user, refetch }: UserProps) {
  const auth = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const response = await api.get(`/following/`, {
          params: { userId: auth.user.id, followingId: user.id },
        });
        setIsFollowing(!!response.data);
      } catch (error) {
        console.error("Error checking following status:", error);
      }
    };
    checkFollowStatus();
  }, [auth.user.id, user.id]);

  const followMutation = useMutation<FollowEntity, AxiosError, FollowDTO>({
    mutationFn: async (data) => {
      if (isFollowing) {
        const response = await api.delete("/delete-follower", { data });
        return response.data;
      } else {
        const response = await api.post("/add-follower", data);
        return response.data;
      }
    },
    onSuccess: () => {
      refetch();
      setIsFollowing((prev) => !prev);
    },
    onError: (error) => {
      console.error(
        isFollowing ? "Failed to unfollow:" : "Failed to follow:",
        error
      );
    },
  });

  const handleFollowClick = async () => {
    const data: FollowDTO = {
      followersId: auth.user.id,
      followingId: user.id,
    };
    await followMutation.mutateAsync(data);
  };

  return (
    <FormControl as="form" onSubmit={(e) => e.preventDefault()} width="100%">
      <HStack width="100%" justify="space-between">
        <HStack gap={3}>
          <CardImage src={user.avatar} />
          <VStack align="start" gap={0}>
            <Text fontSize="sm" fontWeight="500" color="#FFF">
              {user.fullName}
            </Text>
            <Text color="#909090" fontSize="sm" fontWeight="400">
              @{user.username}
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <HollowButton
            text={isFollowing ? "Following" : "Follow"}
            width="100%"
            height="33px"
            fontSize=".9rem"
            onClick={handleFollowClick}
          />
        </HStack>
      </HStack>
    </FormControl>
  );
}
