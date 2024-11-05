import { useS3Upload } from "next-s3-upload";
import { useEffect, useState } from "react";
import * as S from "styles/components/s3upload/style";
import axios from "axios";
import { useRecoilState } from "recoil";
import { sendContactForm } from "lib/api";
import { joinModalOpen, isLaunched } from "constants/atoms";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
const initValues = {
  name: "",
  studentNumber: "",
  email: "",
  phone: "",
  message: "",
  file: "",
  url: "https://next-recruit.s3.ap-northeast-2.amazonaws.com/recruit/",
};
const initState = { isLoading: false, error: "", values: initValues };

export default function UploadPage() {
  const toast = useToast();
  const [launch, setLaunch] = useRecoilState(isLaunched);
  const [infoOpen, setInfoOpen] = useRecoilState(joinModalOpen);
  const [state, setState] = useState(initState);
  const [s3url, setS3url] = useState<any>("");
  const [file, setFile] = useState<any>("");
  let { uploadToS3, files, resetFiles } = useS3Upload();
  const { values, isLoading, error } = state;
  const [touched, setTouched] = useState<any>({});
  const onBlur = ({ target }: any) =>
    setTouched((prev: any) => ({ ...prev, [target.name]: true }));
  const handleChange = ({ target }: any) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  let handleFileChange = async (event: any) => {
    let file = event.target.files[0];
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        ["file"]: file.name,
      },
    }));
    setFile(file);
  };
  const submitSheet = async () => {
    // console.log(values);
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
        setTouched({});
        setState(initState);
        setS3url("");
        setFile("");
        setInfoOpen(false);
        setLaunch(true);
        // --------------------------
        sendContactForm(values);
        // --------------------------
        toast({
          title: "제출되었습니다!",
          status: "success",
          duration: 3000,
          position: "top",
        });
      })
      .catch((error) => {
        console.log(error, error.message);
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
        alert(`문제가 발생했습니다. 다시 시도해주세요.${error.message}`);
      });
  };
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    let { url } = await uploadToS3(file, {
      endpoint: {
        request: {
          headers: {},
          body: {
            studentNumber: values.studentNumber,
            email: values.email,
          },
        },
      },
    });
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        ["url"]: url,
      },
    }));
    setS3url(url);
  };
  useEffect(() => {
    if (s3url) {
      submitSheet();
    }
  }, [s3url]);
  return (
    <S.Container>
      <S.FormContainer>
        <div>
          <Heading fontSize={"2rem"} mb={4}>
            지원하기
          </Heading>
          입력하신 정보와 리크루팅 일정 관련 안내는 작성하신 이메일로
          발송드립니다. <br />
          <br />
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel fontSize={"1.8rem"}>이름</FormLabel>
            <Input
              size={"lg"}
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
            isInvalid={touched.studentNumber && !values.studentNumber}
            mb={5}
          >
            <FormLabel fontSize={"1.8rem"}>학번</FormLabel>
            <Input
              size={"lg"}
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
              size={"lg"}
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
              size={"lg"}
              type="number"
              name="phone"
              errorBorderColor="red.300"
              value={values.phone}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>필수</FormErrorMessage>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel fontSize={"1.4rem"}>
              원활한 면접 진행을 위해, 2월25일(일) 중 불가능한 시간대가 있다면,
              사유와 함께 적어주세요
            </FormLabel>
            <Input
              size={"lg"}
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>필수</FormErrorMessage>
          </FormControl>
          <FormControl mb={5} isRequired>
            <FormLabel fontSize={"1.8rem"}>지원서 파일</FormLabel>
          </FormControl>
          <div className="pt-8">{file?.name}</div>
          {/* <div className="pt-8">
            {files.map((file, index) => (
              <div key={index}>{file.progress}%</div>
            ))}
          </div> */}
          <S.FileInputBtn htmlFor="fileInput">지원서 파일 첨부</S.FileInputBtn>
        </div>
        <input
          id="fileInput"
          onChange={handleFileChange}
          name="file"
          type="file"
          style={{
            width: "0",
            height: "0",
            padding: "0",
            visibility: "hidden",
          }}
        />
      </S.FormContainer>

      <Button
        fontSize={"2rem"}
        variant="outline"
        colorScheme="orange"
        p={10}
        isLoading={isLoading}
        isDisabled={
          !values.name ||
          !values.email ||
          !values.phone ||
          !values.studentNumber ||
          !file
        }
        onClick={onSubmit}
      >
        지원하기!
      </Button>
    </S.Container>
  );
}
