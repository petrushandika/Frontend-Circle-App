import {
  VStack,
  HStack,
  Text,
  Box,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeaderCard from "../components/common/card/CardHeader";
import HollowInput from "../components/common/input/HollowInput";
import SolidButton from "../components/common/button/SolidButton";
import { LoginProps } from "../types/Types";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../libs/Api";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const [data, setData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit: SubmitHandler<LoginProps> = async (values, event?) => {
    try {
      if (event) event.preventDefault();
      const response = await api.post("/auth/login", values);
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
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
      <VStack as="form" width="100%" gap={3} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Email/Username"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email address",
              },
            })}
            value={data.email}
            onChange={handleInputChange}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            value={data.password}
            onChange={handleInputChange}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Box width="100%" textAlign="end">
          <Text>Forgot Password?</Text>
        </Box>
        <SolidButton text="Login" width="100%" type="submit" />
      </VStack>
      <HStack>
        <Text>Don't have an account?</Text>
        <Link to="/register">
          <Text color="#04A51E">Sign Up</Text>
        </Link>
      </HStack>
    </VStack>
  );
}
