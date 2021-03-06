import * as React from "react";

type AddIconProps = {
  width: string;
  height: string;
};

const AddIcon: React.FunctionComponent<AddIconProps> = ({ width, height }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#579AFF" />
        <path d="M15 28L15 4L17 4L17 28H15Z" fill="white" />
        <path d="M15 28L15 4L17 4L17 28H15Z" fill="white" />
        <path d="M15 28L15 4L17 4L17 28H15Z" fill="white" />
        <path d="M4 15L28 15L28 17L4 17L4 15Z" fill="white" />
        <path d="M4 15L28 15L28 17L4 17L4 15Z" fill="white" />
        <path d="M4 15L28 15L28 17L4 17L4 15Z" fill="white" />
      </svg>
    </>
  );
};

export default AddIcon;
