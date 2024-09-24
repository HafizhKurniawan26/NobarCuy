import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="bg-slate-800 text-white rounded-full w-fit h-fit py-1 px-5 text-sm mb-2">
        {children}
      </h1>
    </>
  );
};

export default Header;
