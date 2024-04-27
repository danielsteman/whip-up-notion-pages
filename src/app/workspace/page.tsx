"use client";

import {
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  LinkProps,
  Spacer,
  useDisclosure,
  VStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import SignOutButton from "../components/signoutbutton";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

const DrawerLink: React.FC<{ href: string; text: string } & LinkProps> = ({
  href,
  text,
}) => {
  return (
    <Link
      href={href}
      fontWeight={600}
      _hover={{ bgColor: "slate.700" }}
      rounded={4}
      p={1}
      px={2}
      color="white"
    >
      {text}
    </Link>
  );
};

const Workspace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [url, setUrl] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/make-recipe", { url });
      console.log(response);
      console.log("Recipe created successfully!");
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <Flex flexDir="column" minH="100vh">
      <Box>
        <Flex flexDir="row" p={2} px={4} bgColor={"slate.800"} align="center">
          <Logo />
          <Spacer />
          <IconButton
            onClick={onOpen}
            p={0}
            size="md"
            icon={<HamburgerIcon />}
            aria-label={"menu"}
            fontSize="24px"
            bgColor="slate.700"
            color="white"
          ></IconButton>
        </Flex>
        <VStack p={8} align="left" gap="4">
          <HStack w="100%">
            <VStack align="left">
              <Heading size="md">Recipes</Heading>
              <Text>
                A list of all the web pages your converted to Notion pages.
              </Text>
            </VStack>
            <Spacer />
          </HStack>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="url"
                value={url}
                onChange={handleChange}
                placeholder="Enter recipe URL"
                color="slate.900"
              />
              <InputRightElement px={1} w="fit-content">
                <Button size="sm" px={4} colorScheme="primary" type="submit">
                  Go!
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </VStack>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="slate.800">
          <DrawerHeader>
            <DrawerCloseButton color="white" />
          </DrawerHeader>
          <DrawerBody py={4}>
            <Flex flexDir="column" gap={2} h="100%">
              <DrawerLink href="/" text="Your databases" />
              <DrawerLink href="/" text="Settings" />
              <Spacer />
              <HStack>
                <Spacer />
                <SignOutButton />
              </HStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Workspace;
