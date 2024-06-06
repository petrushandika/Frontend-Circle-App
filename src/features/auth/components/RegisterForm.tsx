import {
  VStack,
  HStack,
  Text,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import HeaderCard from "../../../components/common/card/CardHeader";
import HollowInput from "../../../components/common/input/HollowInput";
import SolidButton from "../../../components/common/button/SolidButton";
import { RegisterProps } from "../types/RegisterProps";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../../configs/Api";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../validators/RegisterSchema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: zodResolver(RegisterSchema),
  });

  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterProps> = async (values, event) => {
    try {
      if (event) event.preventDefault();
      const response = await api.post("/auth/register", values);
      toast({
        title: "Register Success!",
        description: "Success",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      navigate("/auth/login");
      console.log("Registration successful:", response.data);
    } catch (error) {
      toast({
        title: "Register Failed!",
        description: "Failed to register. Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      console.error("Registration failed:", error);
    }
  };

  return (
    <VStack
      height={"100vh"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      color={"#FFF"}
      spacing={3}
      width={"400px"}
      margin={"auto"}
    >
      <HeaderCard
        color={"#04A51E"}
        text={"Circle"}
        fontWeight={600}
        fontSize={"2em"}
      />
      <HeaderCard
        color={"#FFF"}
        text={"Create account Circle"}
        fontWeight={600}
        fontSize={"1.5em"}
      />
      <VStack
        as="form"
        width={"100%"}
        gap={3}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={!!errors.fullName}>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Full Name"
            {...register("fullName")}
          />
          <FormErrorMessage>
            {errors.fullName && errors.fullName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.username}>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Username"
            {...register("username")}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Email"
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <SolidButton text="Create" width={"100%"} type="submit" />
      </VStack>
      <HStack>
        <Text>Already have an account?</Text>
        <Link to="/auth/login">
          <Text color={"#04A51E"}>Login</Text>
        </Link>
      </HStack>
    </VStack>
  );
}
