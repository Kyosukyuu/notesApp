import { Button, Icon, Tooltip } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import useLocalStorage from "../hooks/useLocalStorage";

const UnmarkAllNotes = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");

  const unMarkAllNotes = () => {
    let tempNotes = notes.map((note) => {
      note.status = "INCOMPLETE";
      return note;
    });
    setNotes(tempNotes);
    setStoredNotes(tempNotes);
  };

  return (
    <>
      <Tooltip hasArrow label="Mark Notes As In-Progress">
        <Button
          colorScheme="blue"
          size="lg"
          py={10}
          onClick={unMarkAllNotes}
          variant="outline"
        >
          <Icon as={MdEdit} fontSize={60} />
        </Button>
      </Tooltip>
    </>
  );
};

export default UnmarkAllNotes;
