"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import "./menu.css";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef(null);
  const tl = useRef(null);
  const router = useRouter();

  const navigateThenCloseMenu = (path) => {
    router.push(path); // Navigate immediately

    // Delay the reverse animation slightly to allow route change to take effect
    setTimeout(() => {
      tl.current.reverse();
      setMenuOpen(false);
    }, 100); // Small delay is smoother
  };

  const toggleMenu = () => {
    if (menuOpen) {
      tl.current.reverse();
      setMenuOpen(false);
    } else {
      tl.current.play();
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 50, opacity: 0 });
    gsap.set(".menu-overlay", {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(".menu-overlay", {
        duration: 0.4, // Faster animation
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.inOut",
      })
      .to(
        ".menu-link-item-holder",
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <section className="relative overflow-hidden text-white">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[1111] bg-black text-white p-2"
      >
        {menuOpen ? "Close" : "Open"}
      </button>

      <div className="menu-container" ref={container}>
        <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black z-[999] flex flex-col items-center justify-center gap-6">
          {links.map((link) => (
            <div
              key={link.path}
              className="menu-link-item-holder text-2xl cursor-pointer"
              onClick={() => navigateThenCloseMenu(link.path)}
            >
              {link.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
