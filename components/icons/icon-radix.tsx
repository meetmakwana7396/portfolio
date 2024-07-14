import React from "react";

const IconRadix = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
      fill="none"
      className={className}
      //   style="margin-right:3px"
      viewBox="4 0 17 25">
      <path
        d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default IconRadix;
