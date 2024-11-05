import React, { useState, useCallback, useEffect } from "react";
// 이 파일은 사용하지 않습니다 We don't use this file
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "lib/api";
const initValues = {
  name: "",
  studentNumber: "",
  email: "",
  phone: "",
};
const initState = { isLoading: false, error: "", values: initValues };

function NodeMailer() {
  const toast = useToast();
  const [fileInfo, setFileInfo] = useState<any>(null);
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<any>({});
  const { values, isLoading, error } = state;
  const onBlur = ({ target }: any) =>
    setTouched((prev: any) => ({ ...prev, [target.name]: true }));
  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSelectFile = useCallback((e: any) => {
    setFileInfo(e.target.files[0]);
    let file = e.target.files[0];
  }, []);

  const onSubmit = async () => {
    // setState((prev) => ({
    //   ...prev,
    //   isLoading: true,
    // }));
    let formData = new FormData();
    formData.append("files", fileInfo);
    formData.append("values", JSON.stringify(values));
    // for (let key of formData.keys()) {
    //   console.log("입력확인", key, ":", formData.get(key));
    // }
    try {
      await sendContactForm(formData);
      setTouched({});
      setState(initState);
      // setFileInfo(null);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div>
      <Container mt={12}>
        <Heading fontSize={"2rem"}>Contact</Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel fontSize={"1.8rem"}>이름</FormLabel>
          <Input
            fontSize={"2rem"}
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>필수</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel fontSize={"1.8rem"}>학번</FormLabel>
          <Input
            type="number"
            name="studentNumber"
            errorBorderColor="red.300"
            value={values.studentNumber}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>필수</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel fontSize={"1.8rem"}>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>필수</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.phone && !values.phone}
        >
          <FormLabel fontSize={"1.8rem"}>전화번호</FormLabel>
          <Input
            type="text"
            name="phone"
            errorBorderColor="red.300"
            value={values.phone}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>필수</FormErrorMessage>
        </FormControl>
        {/* 
        <FormControl
          isRequired
          isInvalid={touched.message && !values.attatchment}
          mb={5}
        > */}
        {/* <FormLabel>지원서 파일 첨부</FormLabel> */}
        <label htmlFor="input">업로드</label>
        <input
          id="input"
          style={{ visibility: "hidden" }}
          type={"file"}
          name="file"
          // value={values.attatchment}
          onChange={onSelectFile}
          // onBlur={onBlur}
        />
        {/* <FormErrorMessage>필수</FormErrorMessage> */}
        {/* </FormControl> */}

        <Button
          fontSize={"2rem"}
          variant="outline"
          colorScheme="orange"
          isLoading={isLoading}
          disabled={!values.name || !values.email || !values.phone}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}

export default NodeMailer;
