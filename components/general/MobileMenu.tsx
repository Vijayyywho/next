"use client"; // Mark this as a client component

import React, { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

interface MobileMenuProps {
  user: any; // Pass the user object from the server component
}

export default function MobileMenu({ user }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sm:hidden relative">
      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-blue-500 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-18 right-0 bg-white shadow-lg w-full p-4 z-10 transition-transform transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-20px] opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
          {user ? (
            <div className="flex flex-col items-center gap-4">
              <p>{user.given_name}</p>
              <LogoutLink className={buttonVariants({ variant: "secondary" })}>
                Logout
              </LogoutLink>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <LoginLink className={buttonVariants()}>Login</LoginLink>
              <RegisterLink
                className={buttonVariants({ variant: "secondary" })}
              >
                Sign Up
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
