import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Flex,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const variants = {
  hidden: { scale: 0.75, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const PostNoteForm = () => {
  const { register, handleSubmit } = useForm();

  const { notes, setNotes } = useContext(NotesContext);
  const [storedNotes, setStoredNotes] = useLocalStorage("notes");

  const submitNote = (data) => {
    data["status"] = "INCOMPLETE";
    data["id"] = uuidv4();
    setNotes([...notes, data]);
  };

  useEffect(() => {
    setStoredNotes(notes);
  }, [notes, setNotes, setStoredNotes]);

  return (
    <MotionBox
      as="form"
      onSubmit={handleSubmit(submitNote)}
      p={4}
      mb={-36}
      mt={8}
      mx={8}
      rounded="md"
      bg="white"
      boxShadow="lg"
      maxWidth="650px"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75 }}
    >
      <FormControl id="new-note">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Post a New Note
        </Heading>
        <Box display="flex">
          <Box width="100%" mb={3} mr={4}>
            <FormLabel htmlFor="noteTitle">Title</FormLabel>
            <Input
              type="text"
              placeholder="ex: groceries"
              name="noteTitle"
              id="note-title"
              {...register("noteTitle")}
              required
            />
          </Box>
          <Flex width="100%" ml={4} flexDirection="column">
            <FormLabel htmlFor="noteColor">Choose a color</FormLabel>
            <RadioGroup defaultValue="yellow" defaultValue="#ffc">
              <Stack spacing={3} direction="row">
                <Radio
                  colorScheme="yellow"
                  value="#ffc"
                  name="note-color"
                  id="note-color-yellow"
                  {...register("noteColor")}
                >
                  Yellow
                </Radio>
                <Radio
                  colorScheme="blue"
                  value="#ccf"
                  name="noteColor"
                  id="note-color-blue"
                  {...register("noteColor")}
                >
                  Blue
                </Radio>
                <Radio
                  colorScheme="green"
                  value="#cfc"
                  name="noteColor"
                  id="note-color-green"
                  {...register("noteColor")}
                >
                  Green
                </Radio>
                <Radio
                  colorScheme="pink"
                  value="#ffc8d5"
                  name="noteColor"
                  id="note-color-pink"
                  {...register("noteColor")}
                >
                  Pink
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Box>

        <Box>
          <FormLabel htmlFor="noteText">Text</FormLabel>
          <Textarea
            type="text"
            placeholder="-bananas..."
            name="noteText"
            id="note-text"
            {...register("noteText")}
            resize="none"
            required
          />
        </Box>
      </FormControl>
      <Flex mt={4} justifyContent="space-between" flexDirection="row-reverse">
        <Button
          colorScheme="purple"
          type="submit"
          width="100px"
          aria-label="post note"
        >
          Post It!
        </Button>
        <Button
          colorScheme="red"
          type="reset"
          variant="outline"
          width="100px"
          aria-label="clear fields"
        >
          Clear
        </Button>
      </Flex>
    </MotionBox>
  );
};

export default PostNoteForm;
