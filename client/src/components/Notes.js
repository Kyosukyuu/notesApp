import PostIt from "./PostIt";
import { Box } from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const Notes = () => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const { notes, setNotes } = useContext(NotesContext);
  useEffect(() => {
    if (storedNotes) setNotes(storedNotes);
  }, []);

  return (
    <Box sx={{ columnCount: [1, 2, 3, 4], gap: "40px" }}>
      {notes &&
        notes.map(({ noteTitle, noteText, noteColor }, i) => (
          <PostIt key={i} title={noteTitle} text={noteText} bg={noteColor} />
        ))}
    </Box>
  );
};

export default Notes;
