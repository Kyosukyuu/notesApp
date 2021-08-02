import { Button, Tooltip } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const DeleteAllNotes = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");

  const deleteAllNotes = () => {
    // localStorage.removeItem("notes");
    setNotes([]);
  };

  useEffect(() => {
    if (notes.length === 0) localStorage.removeItem("notes");
  }, [notes, setNotes]);

  return (
    <Tooltip hasArrow label="Delete All Notes">
      <Button colorScheme="red" size="lg" py={10} onClick={deleteAllNotes}>
        <MdDelete size={60} />
      </Button>
    </Tooltip>
  );
};

export default DeleteAllNotes;
