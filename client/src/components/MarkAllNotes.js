import { Button, Icon, Tooltip } from "@chakra-ui/react";
import { MdDoneAll } from "react-icons/md";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import useLocalStorage from "../hooks/useLocalStorage";

const MarkAllNotes = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");

  const markAllNotes = () => {
    let tempNotes = notes.map((note) => {
      note.status = "COMPLETE";
      return note;
    });
    setNotes(tempNotes);
    setStoredNotes(tempNotes);
  };

  return (
    <>
      <Tooltip hasArrow label="Mark Notes As Finished">
        <Button colorScheme="blue" size="lg" py={10} onClick={markAllNotes}>
          <Icon as={MdDoneAll} fontSize={60} />
        </Button>
      </Tooltip>
    </>
  );
};

export default MarkAllNotes;
