import { Button } from "@chakra-ui/react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="login">
      <Button variant="link" color="slate.900">
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
