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
  HStack,
  Spacer,
  Checkbox,
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { GrGoogle } from "react-icons/gr";
import { BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import GoogleLoginButton from "../components/googleloginbutton";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box h="100%" display="flex" justifyContent="center" alignItems="center">
      <VStack
        maxW="30em"
        w="fit-content"
        gap={4}
        bgColor="slate.800"
        borderRadius={8}
        p={8}
        boxShadow="dark-lg"
      >
        <Logo />
        <Heading size="md">Login to your account</Heading>
        <form>
          <FormControl isRequired p={2}>
            <FormLabel mt={4}>Email address</FormLabel>
            <Input type="email" placeholder="Email" borderColor={"slate.400"} />
            <FormLabel mt={4}>Password</FormLabel>
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
            <HStack py={4} gap={4} alignItems="center">
              <Checkbox size="md" color="slate.300" defaultChecked>
                Remember me
              </Checkbox>
              <Spacer />
              <Link href="reset-password" fontSize="sm" color="primary">
                Forgot password
              </Link>
            </HStack>
            <Button colorScheme="primary" mt={4} w="100%">
              Continue with email
            </Button>
            <GoogleLoginButton />
          </FormControl>
        </form>
      </VStack>
    </Box>
  );
};

export default Login;
