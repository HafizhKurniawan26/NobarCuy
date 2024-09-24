"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const RouterBack = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div>
      {path === "/" || "" ? null : (
        <button
          onClick={() => {
            router.back();
            router.refresh();
            console.log("berhasil");
          }}
          className="absolute top-4 left-5"
        >
          <IoMdArrowRoundBack className="bg-slate-800 text-white p-1 text-2xl rounded-xl" />
        </button>
      )}
    </div>
  );
};

export default RouterBack;
