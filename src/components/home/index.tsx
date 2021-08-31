import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Code,
  Grid,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";
import { FaCheck, FaCross, FaTimes } from "react-icons/fa";

import { useAuth } from "utils/useAuth";

const Home = () => {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const user = useAuth((state) => state.user);
  const login = useAuth((state) => state.login);
  const logout = useAuth((state) => state.logout);

  const [tempEmail, setTempEmail] = useState<string>(user?.email ?? "");

  const handleSubmit = () => {
    login(tempEmail);
  };

  const handleUpdateTempEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempEmail(e.target.value);
  };

  return (
    <Grid gap={4}>
      <Alert status="info" borderRadius={24}>
        <AlertIcon />
        <Text fontSize="sm">
          <Code>zustand</Code> (persist) + <Code>immer</Code>
          <br />
          Try to login and refresh this page
        </Text>
      </Alert>

      <Text>
        is logged in:{" "}
        <Icon
          as={isLoggedIn ? FaCheck : FaTimes}
          color={isLoggedIn ? "green" : "red"}
        />
      </Text>
      <Text>email: {user?.email}</Text>

      {user && (
        <Box
          borderRadius={24}
          borderWidth={1}
          padding={4}
          borderColor="gray.200"
          fontSize="sm"
        >
          <Heading as="p" size="sm">
            Welcome!
          </Heading>
          <Text>name: {user.name}</Text>
          <Text>token: {user.token}</Text>
        </Box>
      )}

      <Input
        disabled={isLoggedIn}
        type="text"
        value={tempEmail}
        onChange={handleUpdateTempEmail}
        placeholder="insert email here to login"
      />

      <Button
        disabled={tempEmail.length === 0 || isLoggedIn}
        onClick={handleSubmit}
      >
        Login
      </Button>

      <Button disabled={!isLoggedIn} onClick={logout}>
        Logout
      </Button>
    </Grid>
  );
};

export default Home;
