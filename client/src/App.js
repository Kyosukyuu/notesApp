import { Box } from "@chakra-ui/react";
import React from "react";
import PostIt from "./components/PostIt";

const App = () => {
  return (
    <Box as="main" mt={8} mx={8}>
      <PostIt title="title1" text="note1" bg="yellow"></PostIt>
    </Box>
  );
};

export default App;
