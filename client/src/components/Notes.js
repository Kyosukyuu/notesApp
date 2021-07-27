import PostIt from "./PostIt";
import { SimpleGrid } from "@chakra-ui/react";

const Notes = () => {
  return (
    <SimpleGrid columns={4} spacing={7} minChildWidth="210px">
      <PostIt title="title1" text="note1" bg="yellow" />
      <PostIt title="title2" text="note2" bg="green" />
      <PostIt title="title3" text="note3" bg="blue" />
      <PostIt title="title4" text="note4" bg="pink" />
    </SimpleGrid>
  );
};

export default Notes;
