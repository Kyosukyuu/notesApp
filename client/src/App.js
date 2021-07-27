import { Box } from "@chakra-ui/react";
import React from "react";
import Notes from "./components/Notes";

const App = () => {
  return (
    <Box as="main" mt={8} mx={8}>
      <Notes />
    </Box>
  );
};

export default App;
