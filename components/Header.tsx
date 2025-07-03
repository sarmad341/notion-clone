// components/Header.tsx
"use client";

import {
  SignedIn,
  SignInButton,
  SignedOut,
  useUser,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between p-4 border-b shadow-sm">
      <h1 className="text-2xl font-semibold">
        {user?.firstName ?? "User"}
        {`'s`} Space
      </h1>
      <Breadcrumbs />

      <div className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
