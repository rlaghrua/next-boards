import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  type IMutation,
  type IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import Link from "next/link";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
      _id
      picture
    }
  }
`;

interface IFormData {
  name: string;
  email: string;
  password: string;
  passwordconfirm: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식에 적합하지않습니다.")
    .required("이메일은 필수 입력입니다."),
  name: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      "닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"
    )
    .required("이름을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀버호는 최대 15자리로 입력해주세요.")
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
      "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
    ),
  passwordconfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 입력 값입니다!"),
});

export default function RegisterPage() {
  const [isopen, setIsopen] = useState(false);
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const handleOk = () => {
    setIsopen(false);
    void router.push("/");
  };

  const handleCancel = () => {
    setIsopen(false);
    void router.push("/");
  };

  const onClickSubmit = async (data: IFormData) => {
    const result = await createUser({
      variables: {
        createUserInput: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      },
    });
    setIsopen(true);
  };

  return (
    <>
      <Modal
        title="회원가입을 축하합니다!"
        open={isopen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={true}
      ></Modal>

      <section className="bg-gray-50 dark:bg-[#101010]">
        <div className="w-[1200px] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            호겸게시판
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onClickSubmit)}
              >
                <div>
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email")}
                  />
                  <div style={{ color: "red" }}>
                    {formState.errors.email?.message}
                  </div>
                </div>
                <div>
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password")}
                  />
                  <div style={{ color: "red" }}>
                    {formState.errors.password?.message}
                  </div>
                </div>
                <div>
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </div>
                  <input
                    {...register("passwordconfirm")}
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div style={{ color: "red" }}>
                    {formState.errors.passwordconfirm?.message}
                  </div>
                </div>
                <div>
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div style={{ color: "red" }}>
                    {formState.errors.name?.message}
                  </div>
                </div>

                <button
                  style={{
                    backgroundColor: formState.isValid ? "black" : "",
                  }}
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
