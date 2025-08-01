interface Size{
  size:"sm" | "md" | "lg";
  fill:'white' | 'black';
  onClick?: ()=>void;
} 
const sizeType = {
  "sm": "size-4",
  "md": "size-5.5",
  "lg": "size-8",
};
const ShareIcon = (props:Size) => {
  return (
    <svg
      className={`${sizeType[props.size]} fill-${props.fill}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <title />
      <g data-name="Layer 51" id="Layer_51">
        <path d="M2,29A1.12,1.12,0,0,1,1.69,29,1,1,0,0,1,1,28V27A19,19,0,0,1,17,8.24V4a1,1,0,0,1,1.6-.8l12,9a1,1,0,0,1,0,1.6l-12,9A1,1,0,0,1,17,22V18.25A18.66,18.66,0,0,0,4.93,25.67L2.81,28.59A1,1,0,0,1,2,29ZM19,6V9.12a1,1,0,0,1-.89,1,17,17,0,0,0-15,14.6l.16-.21A20.68,20.68,0,0,1,17.9,16.11a1,1,0,0,1,.77.26,1,1,0,0,1,.33.74V20l9.33-7Z" />
      </g>
    </svg>
  );
};

export default ShareIcon;
