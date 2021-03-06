import * as React from "react";

type RemoveIconProps = {
  width: string;
  height: string;
};

const RemoveIcon: React.FunctionComponent<RemoveIconProps> = ({
  width,
  height,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#FF5757" />
        <path d="M3 11.25L21 11.25L21 12.75L3 12.75L3 11.25Z" fill="white" />
        <path d="M3 11.25L21 11.25L21 12.75L3 12.75L3 11.25Z" fill="white" />
        <path d="M3 11.25L21 11.25L21 12.75L3 12.75L3 11.25Z" fill="white" />
      </svg>
    </>
  );
};

export default RemoveIcon;
