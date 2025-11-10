import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-[#C8302D] text-white hover:bg-[#A0201D]",
    secondary: "bg-[#F4B41A] text-white hover:bg-[#D9A017]",
    tertiary: "bg-[#F2D5D5] text-[#C8302D] font-semibold hover:bg-[#E0B5B5]",
  };
  return (
    <button
      className={`px-4 py-2 md:px-6 md:py-2 rounded-md transition-colors duration-200 font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
