import { Box, Heading, Text } from "@chakra-ui/react";

const PostIt = ({ title, text, bg }) => {
  let bgCol = "#cfc";
  switch (bg) {
    case "yellow":
      bgCol = "#ffc";
      break;
    case "green":
      break;
    case "purple":
      bgCol = "#ccf";
      break;
  }
  return (
    <Box
      bg={bgCol}
      boxShadow="md"
      height="10rem"
      width="10rem"
      p={3}
      display="inline-block"
      position="relative"
    >
      <Box
        bg="#aaa"
        display="flex"
        height="32px"
        width="2px"
        position="absolute"
        left="50%"
        top="-17px"
        zIndex="1"
        justifyContent="center"
      >
        <Box
          bg="#A31"
          borderRadius="50%"
          height="12px"
          width="12px"
          position="absolute"
        ></Box>
      </Box>

      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};

export default PostIt;
