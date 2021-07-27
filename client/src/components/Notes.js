import PostIt from "./PostIt";
import { SimpleGrid } from "@chakra-ui/react";

const Notes = () => {
  return (
    <SimpleGrid columns={5} spacing={2}>
      <PostIt title="title1" text="note1" bg="yellow" />
      <PostIt title="title2" text="note2" bg="green" />
      <PostIt title="title3" text="note3" bg="blue" />
    </SimpleGrid>
  );
};

export default Notes;
