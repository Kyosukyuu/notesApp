import { Box } from "@chakra-ui/react";
import React from "react";
import Notes from "./components/Notes";
import PostNoteForm from "./components/PostNoteForm";

const App = () => {
  return (
    <Box as="main" mt={5} mx={8}>
      <PostNoteForm />
      <Notes />
    </Box>
  );
};

export default App;
