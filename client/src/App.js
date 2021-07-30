import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Notes from "./components/Notes";
import Options from "./components/Options";
import PostNoteForm from "./components/PostNoteForm";
import { NotesProvider } from "./context/NotesContext";

const App = () => {
  return (
    <NotesProvider>
      <Box as="main" mt={5} mx={8}>
        <Flex justifyContent="center" alignItems="center">
          <PostNoteForm />
          <Options />
        </Flex>

        <Notes />
      </Box>
    </NotesProvider>
  );
};

export default App;
