import { ChangeEvent, useState } from "react";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { BiPlus } from "react-icons/bi";

export function UploadFile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
      onOpen();
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post<{ message: string }>(
        "/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading file", error);
    } finally {
      setUploading(false);
      onClose();
    }
  };

  return (
    <Flex direction="column" align="center">
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <Button
          leftIcon={<BiPlus fontSize={20} />}
          onClick={onOpen}
          variant="solid"
          colorScheme="primary"
          pl={2}
          pr={4}
        >
          Select File
        </Button>
      </label>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="gray.900">
          <ModalHeader>Upload File</ModalHeader>
          <ModalBody>
            <Input
              borderWidth={0.5}
              p={4}
              h="fit-content"
              type="file"
              onChange={handleFileChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="primary"
              onClick={handleUpload}
              isLoading={uploading}
            >
              Upload
            </Button>
            <Button variant="borderDrop" onClick={onClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
