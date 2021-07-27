import PostIt from "./PostIt";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Notes = () => {
  return (
    <Box sx={{ columnCount: [1, 2, 3, 4], gap: "40px" }}>
      <PostIt title="title1" text="note1" bg="yellow" />
      <PostIt title="title2" text="note2" bg="green" />
      <PostIt title="title3" text="note3" bg="blue" />
      <PostIt title="title4" text="note4" bg="pink" />
      <PostIt title="title1" text="note1" bg="yellow" />
      <PostIt title="title2" text="note2" bg="green" />
      <PostIt title="title3" text="note3" bg="blue" />
      <PostIt title="title4" text="note4" bg="pink" />
      <PostIt title="title1" text="note1" bg="yellow" />
      <PostIt title="title2" text="note2" bg="green" />
      <PostIt title="title3" text="note3" bg="blue" />
      <PostIt title="title4" text="note4" bg="pink" />
    </Box>
  );
};

export default Notes;
