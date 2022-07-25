import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  Group,
  Input,
  Modal,
  PasswordInput,
  Space,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { SetStateAction, useContext, useState } from "react";
import { At } from "tabler-icons-react";
import { Web3Storage } from "web3.storage";
import { FormContext } from "../../context/FormContext";
import { UserContext } from "../../context/UserContext";
const SignUp = () => {
  const user = useContext(UserContext);
  const [opened, setOpened] = useState(false);

  function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdiREVlNjRmQWY5RmJGOEQ3QTM2MzAyNjY5QkY0OTE0MEJmMDFlZTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTY0NjI3MDg5ODEsIm5hbWUiOiJidW5jaCJ9.OwG3jsLnWHWRR_FtnUEwQHyHzzBr1KRo1HVbikiyrb8";
    // return process.env.WEB3STORAGE_TOKEN;
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  const client = makeStorageClient();

  const [newname, setNewName] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      image: "",
      newname: "",
      bio: "",
      termsOfService: false,
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
    const newname = form.values.newname;
    const bio = form.values.bio;
    console.log("full", image);

    updateName(username);
    const data = {
      username: username,
      newname: newname,
      bio: bio,
      image: image,
    };
    console.log("form data", data);
  };

  const { name, updateName } = useContext(FormContext);

  return (
    <>
      <div>
        <Text> Uername Context is : {name}</Text>
        <Space h="sm" />
        <Modal
          overlayOpacity={0.55}
          overlayBlur={13}
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          <Box mx="auto">
            {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
            <form>
              <TextInput
                label="Username"
                required
                placeholder="milakunis"
                {...form.getInputProps("username")}
              />
              <Space h="md" />
              <Grid grow>
                <Grid.Col span={2}>
                  <Space h="sm" />

                  <Dropzone
                    accept={IMAGE_MIME_TYPE}
                    onDrop={async (files) => {
                      const imageData = files[0].name;
                      const rootCid = await client.put(files, {
                        name: "avatar",
                        maxRetries: 3,
                      });
                      setFile(rootCid);
                      console.log("rootCID", rootCid);
                      setImage(
                        "https://" +
                          `${rootCid}` +
                          ".ipfs.dweb.link/" +
                          `${imageData}`
                      );

                      return { image };
                    }}
                  >
                    <Group
                      position="center"
                      spacing="lg"
                      style={{ minHeight: 50, pointerEvents: "none" }}
                    >
                      <Avatar
                        radius="xl"
                        size="xl"
                        src={null || image}
                        alt="it's me"
                      />
                    </Group>
                  </Dropzone>
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="Full Name"
                    required
                    placeholder="Mila Kunis"
                    {...form.getInputProps("newname")}
                  />

                  <Textarea
                    label="Bio"
                    placeholder="I like to do human things 👽 "
                    {...form.getInputProps("bio")}
                  />
                </Grid.Col>
              </Grid>
              <Space h="sm" />
              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <Space h="xs" />

              <PasswordInput placeholder="Password" label="Password" required />
              <Group position="center" grow mt="md">
                <Button onClick={onFinish}>Submit</Button>
              </Group>
            </form>
          </Box>
        </Modal>

        <Group grow position="center">
          <Button onClick={() => setOpened(true)}>Join </Button>
        </Group>
      </div>
    </>
  );
};

export default SignUp;
