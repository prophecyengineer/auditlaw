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
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";

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
    const email = form.values.email;
    const password = form.values.password;

    const data = {
      email: email,
      password: password,
    };
    console.log("form data", data);
  };

  return (
    <>
      <Space h="xl" />
      <Title order={1}>Join the space where the auditors hang out</Title>
      <Space h="xl" />
      <SignUp />

      <Space h="sm" />

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

      <Group grow position="center">
        <Button variant="outline" onClick={() => setOpened(true)}>
          Sign In{" "}
        </Button>
      </Group>
    </>
  );
};

export default SignIn;
