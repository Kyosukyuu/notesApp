import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const PostNoteForm = () => {
  const { register, handleSubmit } = useForm();
  const submitNote = (data) => console.log(data);
  return (
    <Box as="form">
      <FormControl id="new-note">
        <FormLabel>Create New Note</FormLabel>
        <FormLabel htmlFor="note-title">Title</FormLabel>
        <Input
          type="text"
          placeholder="ex: groceries"
          name="note-title"
          {...register("example")}
        />
        <FormLabel htmlFor="note-text">Text</FormLabel>
        <Textarea type="text" name="note-text" />
      </FormControl>
      <Button colorScheme="blue">Submit</Button>
    </Box>
  );
};

export default PostNoteForm;
