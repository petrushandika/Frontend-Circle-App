import {
  VStack,
  HStack,
  Text,
  Box,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CardHeader from "../../../components/common/card/CardHeader";
import HollowInput from "../../../components/common/input/HollowInput";
import SolidButton from "../../../components/common/button/SolidButton";
import { LoginProps } from "../types/LoginProps";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../configs/Api";
import { SET_AUTH_CHECK } from "../slices/authSlice";
import { LoginSchema } from "../validators/LoginSchema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(LoginSchema),
  });

  const [data, setData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const toast = useToast();

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit: SubmitHandler<LoginProps> = async (values, event) => {
    try {
      const response = await api.post("/auth/login", values);
      const { token, user } = response.data;

      if (event) event.preventDefault();
      console.log("Login successful:", response.data);

      localStorage.setItem("Token", token);

      if (user) {
        dispatch(SET_AUTH_CHECK(user));
        toast({
          title: "Login Success!",
          description: "Success",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Email/Password is wrong!",
        description: "Failed to login. Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
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
      <CardHeader
        color={"#04A51E"}
        text={"Circle"}
        fontWeight={600}
        fontSize={"2em"}
      />
      <CardHeader
        color={"#FFF"}
        text={"Login account Circle"}
        fontWeight={600}
        fontSize={"1.5em"}
      />
      <VStack as="form" width="100%" gap={3} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Email/Username"
            {...register("email")}
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
            {...register("password")}
            value={data.password}
            onChange={handleInputChange}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Box width="100%" textAlign="end">
          <Link to="/auth/forgotpassword">
            <Text>Forgot Password?</Text>
          </Link>
        </Box>
        <SolidButton text="Login" width="100%" type="submit" />
      </VStack>
      <HStack>
        <Text>Don't have an account?</Text>
        <Link to="/auth/register">
          <Text color="#04A51E">Sign Up</Text>
        </Link>
      </HStack>
    </VStack>
  );
}
