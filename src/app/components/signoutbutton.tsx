import { Tooltip, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const SignOutButton = () => {
  return (
    <Tooltip label="Sign out">
      <IconButton
        size="sm"
        w="fit-content"
        aria-label={"sign-out"}
        icon={<BiLogOut fontSize={20} />}
        mb={4}
      />
    </Tooltip>
  );
};

export default SignOutButton;
