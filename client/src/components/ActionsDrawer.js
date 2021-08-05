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
  Icon,
  VStack,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";
import DeleteAllNotes from "./DeleteAllNotes";
import MarkAllNotes from "./MarkAllNotes";
import UnmarkAllNotes from "./UnmarkAllNotes";

const MotionButton = motion(Button);

const variants = {
  initial: { x: 15, opacity: 0, rotate: 45 },
  animate: { x: 0, opacity: 1, rotate: 0 },
};

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
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon as={MdKeyboardArrowLeft} fontSize={30} />
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
        <DrawerContent width="200px !important">
          <DrawerCloseButton />
          <DrawerHeader as="header">More Actions</DrawerHeader>

          <DrawerBody bg="white">
            <VStack alignItems="flex-start" spacing={5}>
              <DeleteAllNotes />
              <MarkAllNotes />
              <UnmarkAllNotes />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              display="block"
              width="100%"
              onClick={onClose}
              colorScheme="red"
            >
              Exit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ActionsDrawer;
