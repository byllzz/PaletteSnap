import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  className = "",
  icon,
  ...props
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full rounded-full border border-gray-200 py-2.5 px-4 text-sm outline-none focus:border-gray-400 transition-colors ${icon ? "pl-10" : ""} ${className}`}
        {...props}
      />
    </div>
  );
};
