import type { Ref } from "react";

interface InputProps {
  ref: Ref<HTMLInputElement>;
  placeholder: string;
  id: string;
  label: string;
}

const InputBox = (props: InputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={props.id}
        className="block pl-1 mb-1 text-sm text-white"
      >
        {props.label}
      </label>
      <input
        type="text"
        ref={props.ref}
        id={props.id}
        placeholder={props.placeholder}
        className="text-sm rounded-lg  block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputBox;
