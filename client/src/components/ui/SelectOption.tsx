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
        className="block pl-1 mb-1 text-sm text-gray-900 text-white"
      >
        {props.label}
      </label> */}
      <select
        id={props.id}
        ref={props.ref}
        className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
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
