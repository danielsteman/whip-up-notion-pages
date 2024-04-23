import { Button } from "@chakra-ui/react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="login">
      <Button variant="link" color="white">
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
