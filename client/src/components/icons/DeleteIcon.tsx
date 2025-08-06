interface Props {
  onClick: () => void;
}

const DeleteIcon = (props: Props) => {
  return (
    <svg
    onClick={props.onClick}
      className="size-5 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.7 10.3 48 12 48 L 38 48 C 39.7 48 41 46.7 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 19 14 C 19.6 14 20 14.4 20 15 L 20 40 C 20 40.6 19.6 41 19 41 C 18.4 41 18 40.6 18 40 L 18 15 C 18 14.4 18.4 14 19 14 z M 25 14 C 25.6 14 26 14.4 26 15 L 26 40 C 26 40.6 25.6 41 25 41 C 24.4 41 24 40.6 24 40 L 24 15 C 24 14.4 24.4 14 25 14 z M 31 14 C 31.6 14 32 14.4 32 15 L 32 40 C 32 40.6 31.6 41 31 41 C 30.4 41 30 40.6 30 40 L 30 15 C 30 14.4 30.4 14 31 14 z"></path>
    </svg>
  );
};

export default DeleteIcon;
