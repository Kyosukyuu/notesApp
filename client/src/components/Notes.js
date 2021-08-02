import PostIt from "./PostIt";
import { Box, Center } from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const Notes = () => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const { notes, setNotes } = useContext(NotesContext);
  useEffect(() => {
    if (storedNotes) setNotes(storedNotes);
  }, [setNotes, storedNotes]);

  return (
    <Center mt={44} mx={10}>
      <Box
        as="article"
        sx={{ columnCount: [1, 2, 3, 4], gap: "40px" }}
        // mx={[12, 12, 12, 20]}
        width="100%"
        maxWidth={["100%", "100%", "750px", "1000px"]}
      >
        {notes &&
          notes.map(({ noteTitle, noteText, noteColor, id }) => (
            <PostIt
              key={id}
              title={noteTitle}
              text={noteText}
              bg={noteColor}
              id={id}
            />
          ))}
      </Box>
    </Center>
  );
};

export default Notes;
