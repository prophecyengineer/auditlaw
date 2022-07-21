import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  Modal,
  PasswordInput,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useState } from "react";

import SignUp from "../SignUp";

const SignIn = () => {
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },

    // validate: {
    //   email: (value: string) =>
    //     /^\S+@\S+$/.test(value) ? null : "Invalid email",
    // },
  });

  const onFinish = () => {
    // const image =
    //   "https://bafybeiadydnbo4ffr2vuhgehe3gnog4rxoebsyasolvoahych4vcioszhm.ipfs.dweb.link/mila.jpeg";
    const username = form.values.username;
    const email = form.values.email;
    const password = form.values.password;

    const data = {
      username: username,
      email: email,
      password: password,
    };
    console.log("form data", data);
  };
  return (
    <>
      <SignUp />
      <div>
        <Text>This is sign in</Text>

        <Modal
          overlayOpacity={0.55}
          overlayBlur={13}
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          <Box sx={{ maxWidth: 300 }} mx="auto">
            {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
            <form>
              <TextInput
                label="Username"
                required
                placeholder="milakunis"
                {...form.getInputProps("username")}
              />
              <Space h="md" />

              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <Space h="md" />

              <PasswordInput
                placeholder="Password"
                label="Password"
                description="Password must include at least one letter, number and special character"
                required
              />
              <Group position="right" mt="md">
                <Button onClick={onFinish}>Submit</Button>
              </Group>
            </form>
          </Box>
        </Modal>

        <Group position="center">
          <Button onClick={() => setOpened(true)}>Sign In </Button>
        </Group>
      </div>
    </>
  );
};

export default SignIn;
