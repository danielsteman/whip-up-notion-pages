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
} from "@chakra-ui/react";
import { UploadFile } from "../upload-file";
import Logo from "../components/logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import SignOutButton from "../components/signoutbutton";

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
    >
      {text}
    </Link>
  );
};

const Workspace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
        <HStack p={8}>
          <VStack align="left">
            <Heading size="md">Databases</Heading>
            <Text>A list of all your databases</Text>
          </VStack>
          <Spacer />
          <UploadFile />
        </HStack>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="slate.800">
          <DrawerHeader>
            <DrawerCloseButton />
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
    </>
  );
};

export default Workspace;
