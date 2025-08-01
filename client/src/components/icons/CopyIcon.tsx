interface Size{
  size?:"sm" | "md" | "lg";
} 
const sizeType = {
  "sm": "size-4",
  "md": "size-6",
  "lg": "size-40",
};

const CopyIcon = (props:Size) => {
  return (
    <svg className={`${sizeType[props.size || 'md']} fill-white`} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z"/></svg>
  )
}

export default CopyIcon