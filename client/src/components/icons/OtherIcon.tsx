interface Size{
  size?:"sm" | "md" | "lg";
} 
const sizeType = {
  "sm": "size-4",
  "md": "size-6",
  "lg": "size-40",
};

const OtherIcon = (props:Size) => {
  return (
   <svg className={`${sizeType[props.size || 'md']} fill-white`} styles="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
</style><g id="grid_system"/><g id="_icons"><path d="M20.4,18.2l1.3-3c0,0,0,0,0,0c0.4-0.9,0.3-2-0.3-2.8C20.9,11.5,20,11,19,11v0c0-2.2-1.8-4-4-4h-2.5l-1.1-1.7   C10.9,4.5,9.9,4,8.9,4H6C4.3,4,3,5.3,3,7v9.8c0,1.6,1.2,2.9,2.8,3.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0   c0,0,0,0,0.1,0h0.2h11.5C18.9,20,20,19.3,20.4,18.2z M5,7c0-0.6,0.4-1,1-1h2.9c0.3,0,0.6,0.2,0.8,0.4l1.4,2.1C11.4,8.8,11.7,9,12,9   h3c1.1,0,2,0.9,2,2h-6.7c-1.2,0-2.3,0.7-2.8,1.8l-2.1,4.9C5.2,17.5,5,17.2,5,16.8V7z M17.7,18L7.5,18l1.9-4.4   c0.2-0.4,0.5-0.6,0.9-0.6H18h1c0.3,0,0.6,0.2,0.8,0.4c0.2,0.3,0.2,0.6,0.1,0.9l-1.3,3C18.4,17.8,18.1,18,17.7,18z"/></g></svg>
  );
};

export default OtherIcon;
