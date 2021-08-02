import { Box, Heading, Text, Flex, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const MotionBox = motion(Box);

const PostIt = ({ title, text, bg, id }) => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const { notes, setNotes } = useContext(NotesContext);

  const deleteNote = () => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // useEffect(() => {
  //   setStoredNotes(storedNotes);
  // }, [notes, setNotes]);

  return (
    <MotionBox
      bg={bg}
      boxShadow="md"
      minHeight="14rem"
      width="100%"
      my="20px"
      mx="auto"
      p={3}
      display="inline-block"
      position="relative"
      justifySelf="center"
      whiteSpace="pre-line"
      whileHover={{ scale: 1.025 }}
    >
      <Tooltip hasArrow label="Delete">
        <Flex
          bg="#aaa"
          height="32px"
          width="2px"
          position="absolute"
          left="50%"
          top="-20px"
          zIndex="1"
          justifyContent="center"
          onClick={deleteNote}
        >
          <Box
            bg="#A31"
            borderRadius="50%"
            height="12px"
            width="12px"
            position="absolute"
          ></Box>
        </Flex>
      </Tooltip>

      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Text>{text}</Text>
    </MotionBox>
  );
};

export default PostIt;
