import { VStack, Heading, Text, Input, Button, HStack, Link } from "@chakra-ui/react";


export default function Register() {
    return (
        <VStack width={"100%"} height={"100vh"} justifyContent={"center"} color={"#FFF"} bg={"#1D1D1D"}>
            <VStack alignItems={"flex-start"}>
                <Heading>Circle</Heading>
                <Text>Create Account Circle</Text>
                <Input />
                <Input />
                <Input />
                <Button width={"100%"}>Create</Button>
                <HStack>
                    <Text>Already have account?</Text>
                    <Link>
                        <Text>Login</Text>
                    </Link>
                </HStack>
            </VStack>
        </VStack>
    )
}