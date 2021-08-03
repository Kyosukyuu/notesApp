import { Center } from "@chakra-ui/react";
import React from "react";
import ActionsDrawer from "./components/ActionsDrawer";
import Notes from "./components/Notes";
import PostNoteForm from "./components/PostNoteForm";
import { NotesProvider } from "./context/NotesContext";
import svgBG from "./assets/undraw_Add_notes.svg";
import svgBG2 from "./assets/undraw_Add_tasks.svg";

const App = () => {
  return (
    <NotesProvider>
      <ActionsDrawer />
      <Center
        as="main"
        pt={5}
        bgImage={[
          null,
          null,
          `url(${svgBG}), url(${svgBG2})`,
          `url(${svgBG}), url(${svgBG2})`,
        ]}
        bgRepeat="no-repeat"
        bgPosition={[null, null, ["3% 52%, 97% 50%"], "1% 30%, 98% 50%"]}
        bgSize={[null, null, "135px", "225px"]}
        bgColor="gray.900"
      >
        <PostNoteForm />
      </Center>
      <Notes />
    </NotesProvider>
  );
};

export default App;
