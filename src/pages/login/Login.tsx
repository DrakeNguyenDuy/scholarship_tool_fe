/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import { LoginSchema, LoginSchemaType } from "../../utils/rules";
import ButtonCustom from "../../components/button";
import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "../../apis/AuthApi";
import { isUnprocessableEntityError } from "../../apis/AxiosError";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

function Login() {
  const { setIsAuth, setUserId, setPermissions } = useContext(Context)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: (body: LoginSchemaType) => AuthApi.login(body),
  });

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onError(error) {
        if (isUnprocessableEntityError<LoginSchemaType>(error)) {
          // const data = error.response?.data;
            // Object.keys(data).forEach((key) =>
            //   setError(key as keyof LoginSchemaType, {
            //     message: data[key as keyof LoginSchemaType],
            //   })
            // );
        }
      },
      onSuccess(data) {
        setUserId(data.data.user_id);
        setIsAuth(true);
        setPermissions(data.data.permissions)
      },
    });
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Schotool
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <Input
                  type="email"
                  placeHolder="Email"
                  register={register}
                  name="email"
                  errorMessage={errors.password?.message}
                  autoComplete="true"
                  require={false}
                  nameLable={""}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeHolder="Password"
                  register={register}
                  name="password"
                  errorMessage={errors.password?.message}
                  autoComplete="true"
                  require={false}
                  nameLable={""}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div> */}
                </div>
                {/* <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a> */}
              </div>
              <ButtonCustom
                errors={errors}
                isLoading={loginMutation.isPending}
                name="Đăng Nhập"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
