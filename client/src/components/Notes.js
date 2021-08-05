import PostIt from "./PostIt";
import {
  Box,
  Center,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import svgImg from "../assets/undraw_feeling_blue.svg";
import { AnimatePresence } from "framer-motion";

const Notes = () => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const { notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    if (storedNotes) setNotes(storedNotes);
  }, [setNotes, storedNotes]);

  return (
    <>
      {notes && notes.length > 0 ? (
        <Center mt={44} mx={[10, 10, null, 10]}>
          <Box
            as="article"
            sx={{ columnCount: [1, 2, 3, 4], gap: "30px" }}
            px={10}
            py={3}
            mb={6}
            width="100%"
            maxWidth={["100%", "100%", "750px", "1000px"]}
            bg="gray.800"
            rounded="md"
            boxShadow="sm"
          >
            <AnimatePresence>
              {notes &&
                notes.map(
                  ({ noteTitle, noteText, noteColor, id, status }, i) => (
                    <PostIt
                      key={i}
                      title={noteTitle}
                      text={noteText}
                      bg={noteColor}
                      id={id}
                      statusInternal={status}
                    />
                  )
                )}
            </AnimatePresence>
          </Box>
        </Center>
      ) : (
        <Center flexDirection="column" mt={44} mb={10} mx={[10, 10, null, 10]}>
          <Image src={svgImg} width="500px" />
          <Alert
            status="info"
            colorScheme="gray"
            maxWidth="500px"
            mt={-15}
            boxShadow="md"
          >
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Nothing Here Yet...</AlertTitle>
              <AlertDescription display="block">
                Add some notes!
              </AlertDescription>
            </Box>
          </Alert>
        </Center>
      )}
    </>
  );
};

export default Notes;
