"use client";

import {
  Text,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Center,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import { Link } from "@chakra-ui/next-js";
import React from "react";

const ResetPassword = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center h="calc(100vh)">
      <VStack
        gap={4}
        bgColor="slate.800"
        borderRadius={8}
        p={8}
        boxShadow="dark-lg"
      >
        <Logo />
        <Heading size="md">Reset your password</Heading>
        <form>
          <FormControl isRequired p={2}>
            <FormLabel mt={4}>New password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Password"
                borderColor={"slate.400"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  colorScheme="slate"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="primary" mt={4} w="100%">
              Reset password
            </Button>
          </FormControl>
        </form>
      </VStack>
    </Center>
  );
};

export default ResetPassword;
