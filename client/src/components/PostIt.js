import { Box, Heading, Text } from "@chakra-ui/react";

const PostIt = ({ title, text, bg }) => {
  let bgCol;
  switch (bg) {
    case "yellow":
      bgCol = "#ffc";
      break;
    case "green":
      bgCol = "#cfc";
      break;
    case "blue":
      bgCol = "#ccf";
      break;
    case "pink":
      bgCol = "#ffc8d5";
      break;
    default:
      bgCol = "#cfc";
  }
  return (
    <Box
      bg={bgCol}
      boxShadow="md"
      minHeight="14rem"
      // width="14rem"
      width="100%"
      // m={4}
      my="20px"
      mx="auto"
      p={3}
      display="inline-block"
      position="relative"
      justifySelf="center"
      whiteSpace="pre-line"
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
