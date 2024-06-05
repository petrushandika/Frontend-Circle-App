import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { SET_AUTH_CHECK } from "../redux/slice/authSlice";
import { Button, VStack, Text } from "@chakra-ui/react";

export default function Testing() {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  function onLogin() {
    dispatch(
      SET_AUTH_CHECK({
        fullName: "Petrus Handika",
        username: "petrushandika",
        email: "petrushandika@gmail.com",
        avatar:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "Hello User!",
      })
    );
  }

  return (
    <>
      <VStack color={"#FFF"}>
        <Text>Full Name: {authUser.fullName}</Text>
        <Text>Username: {authUser.username}</Text>
        <Text>Email: {authUser.email}</Text>
        <Text>Avatar: {authUser.avatar}</Text>
        <Text>Bio: {authUser.bio}</Text>
      </VStack>
      <Button onClick={onLogin}>Login</Button>
    </>
  );
}
