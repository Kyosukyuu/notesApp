import {
  Button,
  Tooltip,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Icon,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect, useState, useRef } from "react";
import { NotesContext } from "../context/NotesContext";

const DeleteAllNotes = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const cancelRef = useRef();

  const deleteAllNotes = () => {
    // localStorage.removeItem("notes");
    setNotes([]);
    onClose();
  };

  useEffect(() => {
    if (notes.length === 0) localStorage.removeItem("notes");
  }, [notes, setNotes]);

  return (
    <>
      <Tooltip hasArrow label="Delete All Notes">
        <Button colorScheme="red" size="lg" py={10} onClick={onOpen}>
          <Icon as={MdDelete} fontSize={60} />
        </Button>
      </Tooltip>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete All Notes
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteAllNotes} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteAllNotes;
