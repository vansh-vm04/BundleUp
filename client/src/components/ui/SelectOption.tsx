import type { Ref } from "react";

interface Options{
    value:string,
    label:string
}
interface InputProps {
  ref: Ref<HTMLSelectElement>;
  id: string;
  label: string;
  options:Options[],
}

const SelectOption = (props:InputProps) => {
  return (
    <div className="flex py-2 flex-col w-full">
      {/* <label
        htmlFor={props.id}
        className="block pl-1 mb-1 text-sm text-gray-900 dark:text-white"
      >
        {props.label}
      </label> */}
      <select
        id={props.id}
        ref={props.ref}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value=''>Select {props.label}</option>
        {props.options.map((o,i)=>(
            <option key={i} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
