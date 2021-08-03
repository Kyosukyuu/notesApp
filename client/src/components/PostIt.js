import {
  Box,
  Heading,
  Text,
  Flex,
  Tooltip,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import { MdIndeterminateCheckBox, MdCheckBox } from "react-icons/md";

const MotionBox = motion(Box);

const PostIt = ({ title, text, bg, id }) => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const { notes, setNotes } = useContext(NotesContext);
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState("INCOMPLETE");

  const deleteNote = () => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // useEffect(() => {
  //   setStoredNotes(storedNotes);
  // }, [notes, setNotes]);

  const toggleStatus = () => {
    if (status === "INCOMPLETE") {
      setStatus("COMPLETE");
    } else if (status === "COMPLETE") {
      setStatus("INCOMPLETE");
    }
  };

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
      onHoverStart={() => setShowStatus(true)}
      onHoverEnd={() => setShowStatus(false)}
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
          cursor="pointer"
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
      {showStatus && status === "INCOMPLETE" && (
        <Tooltip hasArrow label="In-Progress">
          <IconButton
            icon={
              <Icon
                as={MdIndeterminateCheckBox}
                aria-label="Status"
                fontSize={18}
              />
            }
            right="0"
            top="0"
            position="absolute"
            // colorScheme="yellow"
            // color="gray.900"
            colorScheme="blue"
            size="xs"
            mr={1}
            mt={1}
            onClick={toggleStatus}
          />
        </Tooltip>
      )}

      {showStatus && status === "COMPLETE" && (
        <Tooltip hasArrow label="Finished">
          <IconButton
            icon={<Icon as={MdCheckBox} aria-label="Status" fontSize={18} />}
            right="0"
            top="0"
            position="absolute"
            colorScheme="green"
            size="xs"
            mr={1}
            mt={1}
            onClick={toggleStatus}
          />
        </Tooltip>
      )}

      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Text>{text}</Text>
    </MotionBox>
  );
};

export default PostIt;
