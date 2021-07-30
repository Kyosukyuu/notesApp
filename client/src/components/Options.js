import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

const Options = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDirection="column" alignItems="center" mx={8} color="gray.900">
      <Flex
        bg="white"
        rounded="md"
        flexDirection="column"
        alignItems="center"
        p={3}
      >
        <MdSettings size={100} onClick={onOpen} cursor="pointer" />
        <Heading>Options</Heading>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Button>Clear All Notes</Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Options;
