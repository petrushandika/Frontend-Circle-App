import { Image } from "@chakra-ui/react";

export default function BackgroundImageCard() {
  return (
    <Image
      src="../../../../public/images/sunset.jpg"
      width={"100%"}
      height={"100px"}
      objectFit={"cover"}
      borderRadius={5}
    />
  );
}
