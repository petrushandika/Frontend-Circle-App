import { VStack } from "@chakra-ui/react"
import Register from "../../../pages/RegisterPage"
import Api from "../../../libs/Api";

export default function Testing() {

  return (
    <VStack>
      <Register />
      <Api />
    </VStack>
  )
}