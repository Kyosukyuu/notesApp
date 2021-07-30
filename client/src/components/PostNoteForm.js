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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const PostNoteForm = () => {
  const { register, handleSubmit } = useForm();
  const { notes, setNotes } = useContext(NotesContext);

  const [storedNotes, setStoredNotes] = useLocalStorage("notes");
  const submitNote = (data) => {
    console.log(data);
    storedNotes
      ? setStoredNotes([...storedNotes, data])
      : setStoredNotes([data]);
    setNotes([...notes, data]);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(submitNote)}
      p={3}
      mb={4}
      mt={10}
      mx={8}
      rounded="md"
      bg="white"
      boxShadow="sm"
      maxWidth="650px"
    >
      <FormControl id="new-note">
        <Heading as="h2" size="xl" mb={2} textAlign="center">
          Post a New Note
        </Heading>
        <Box display="flex">
          <Box width="100%" mb={3} mr={4}>
            <FormLabel htmlFor="noteTitle">Title</FormLabel>
            <Input
              type="text"
              placeholder="ex: groceries"
              name="noteTitle"
              {...register("noteTitle")}
              required
            />
          </Box>
          <Flex width="100%" ml={4} flexDirection="column">
            <FormLabel htmlFor="noteColor">Choose a color</FormLabel>
            <RadioGroup defaultValue="yellow">
              <Stack spacing={3} direction="row">
                <Radio
                  colorScheme="yellow"
                  value="yellow"
                  name="note-color"
                  {...register("noteColor")}
                >
                  Yellow
                </Radio>
                <Radio
                  colorScheme="blue"
                  value="blue"
                  name="noteColor"
                  {...register("noteColor")}
                >
                  Blue
                </Radio>
                <Radio
                  colorScheme="green"
                  value="green"
                  name="noteColor"
                  {...register("noteColor")}
                >
                  Green
                </Radio>
                <Radio
                  colorScheme="pink"
                  value="pink"
                  name="noteColor"
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
            {...register("noteText")}
            resize="none"
            required
          />
        </Box>
      </FormControl>
      <Flex mt={4} justifyContent="space-between" flexDirection="row-reverse">
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
