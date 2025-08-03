
interface InputProps {
  ref: unknown;
  placeholder: string;
  id: string;
  label: string;
}

const InputBox = (props: InputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={props.id}
        className="block pl-1 mb-1 text-sm text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type="text"
        ref={props.ref}
        id={props.id}
        placeholder={props.placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default InputBox;
