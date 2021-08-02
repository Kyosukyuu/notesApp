import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { MdSettings, MdDelete } from "react-icons/md";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const Options = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const { notes, setNotes } = useContext(NotesContext);

  const deleteAllNotes = () => {
    setStoredNotes("");
    setNotes([]);
  };

  return (
    <MotionFlex
      flexDirection="column"
      alignItems="center"
      mx={8}
      color="gray.900"
      boxShadow="md"
      whileHover={{ color: "#3182CE" }}
    >
      <MotionFlex
        bg="white"
        rounded="md"
        flexDirection="column"
        alignItems="center"
        p={3}
        onClick={onOpen}
        cursor="pointer"
        whileHover={{ backgroundColor: "#171923" }}
      >
        <MdSettings size={100} />
        <Heading>Options</Heading>
      </MotionFlex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Button
                onClick={deleteAllNotes}
                leftIcon={<MdDelete size={22} />}
              >
                Delete All Notes
              </Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionFlex>
  );
};

export default Options;
