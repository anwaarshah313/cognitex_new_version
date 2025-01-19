import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { useRouter } from "next/router"; // Use useRouter for active link management
import Link from "next/link";

export default function Navbar() {
  const router = useRouter(); // Get the router object to determine the current path

  return (
    <nav className={style.nav_main}>
      <div className={style.nav_in}>
        <img className={style.nav_logo} src="./images/logo.png" alt="Logo" />

        <ul className={style.nav_list}>
          {/* Home Link */}
          <li
            className={`${style.nav_li} ${
              router.pathname === "/" ? style.active : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>

          {/* Price Link */}
          <li
            className={`${style.nav_li} ${
              router.pathname === "/price" ? style.active : ""
            }`}
          >
            <Link href="/price">Price</Link>
          </li>

          {/* About Link */}
          <li
            className={`${style.nav_li} ${
              router.pathname === "/about" ? style.active : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>

          {/* Resources Link */}
          <li
            className={`${style.nav_li} ${
              router.pathname === "/resources" ? style.active : ""
            }`}
          >
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <button className={style.nav_btn}>Try it now</button>
      </div>
    </nav>
  );
}
