import { UseFormRegister, RegisterOptions } from "react-hook-form";
import { LoginSchemaType, RegisterSchemaType } from "src/utils/rules";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  placeHolder?: string;
  register: UseFormRegister<any>;
  name: keyof RegisterSchemaType;
  rule?: RegisterOptions;
  errorMessage?: string;
  autoComplete?: string;
  require: boolean;
  nameLable: string;
};

function Input({
  type,
  placeHolder,
  register,
  name,
  rule,
  errorMessage,
  autoComplete,
  require,
  nameLable,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {nameLable}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        {...register(name, rule)}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeHolder}
        required={require}
      />
      <div className="text-red-600 mt-1 min-h-[1.25rem] text-sm text-red">
        {errorMessage}
      </div>
    </div>
  );
}

export default Input;
