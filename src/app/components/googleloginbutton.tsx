import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  return (
    <Button
      variant="outline"
      w="100%"
      color="white"
      leftIcon={<FcGoogle fontSize={20} />}
      mt={4}
    >
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;
