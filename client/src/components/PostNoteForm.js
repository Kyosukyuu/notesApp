import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";

const PostNoteForm = () => {
  const { register, handleSubmit } = useForm();

  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const submitNote = (data) => {
    console.log(data);
    storedNotes
      ? setStoredNotes([...storedNotes, data])
      : setStoredNotes([data]);
  };
  return (
    <Box
      as="form"
      onSubmit={handleSubmit(submitNote)}
      p={3}
      mb={4}
      mx="auto"
      rounded="md"
      bg="white"
      boxShadow="sm"
      maxWidth="650px"
    >
      <FormControl id="new-note">
        <Heading as="h2" size="xl" mb={2} textAlign="center">
          Post a New Note
        </Heading>
        <Box mb={3}>
          <FormLabel htmlFor="note-title">Title</FormLabel>
          <Input
            type="text"
            placeholder="ex: groceries"
            name="note-title"
            {...register("note-title")}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="note-text">Text</FormLabel>
          <Textarea
            type="text"
            placeholder="-bananas..."
            name="note-text"
            {...register("note-text")}
          />
        </Box>
      </FormControl>
      <Flex mt={4} justifyContent="space-between">
        <Button colorScheme="blue" type="submit" width="100px">
          Post It!
        </Button>
        <Button colorScheme="red" type="reset" variant="outline" width="100px">
          Clear
        </Button>
      </Flex>
    </Box>
  );
};

export default PostNoteForm;
