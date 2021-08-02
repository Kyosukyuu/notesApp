import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";
import DeleteAllNotes from "./DeleteAllNotes";

const MotionButton = motion(Button);

const ActionsDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip hasArrow label="More Actions">
        <MotionButton
          position="fixed"
          right="0px"
          bottom="0px"
          mr={4}
          mb={4}
          zIndex={1}
          boxShadow="lg"
          colorScheme="purple"
          onClick={onOpen}
          width="58px"
        >
          <MdKeyboardArrowLeft size={35} />
        </MotionButton>
      </Tooltip>

      <Drawer
        as="section"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent width="225px !important">
          <DrawerCloseButton />
          <DrawerHeader>More Actions</DrawerHeader>

          <DrawerBody bg="white">
            <DeleteAllNotes />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              // mr={3}
              display="block"
              width="100%"
              onClick={onClose}
              colorScheme="red"
            >
              Exit
            </Button>
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ActionsDrawer;
