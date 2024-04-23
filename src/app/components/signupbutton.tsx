import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SignUpButton = () => {
  return (
    <Link href="signup">
      <Button
        variant="outline"
        color="white"
        _hover={{ bgColor: "primary.500", borderColor: "rgba(0,0,0,0)" }}
      >
        Sign up
      </Button>
    </Link>
  );
};

export default SignUpButton;
