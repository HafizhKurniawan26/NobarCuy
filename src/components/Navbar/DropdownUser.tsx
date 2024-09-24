"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const DropdownUser = ({ avaImg }: { avaImg: string | undefined | null }) => {
  const router = useRouter();
  return (
    <div className="cursor-pointer">
      <Dropdown>
        <DropdownTrigger>
          <Avatar size="sm" showFallback src={avaImg} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="dashboard"
            onClick={() => router.push("/users/dashboard")}
          >
            Dashboard
          </DropdownItem>
          <DropdownItem
            key="logout"
            onClick={() => router.push("api/auth/signout")}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownUser;
