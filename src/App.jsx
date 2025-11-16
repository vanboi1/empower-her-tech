import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Animation des liens
  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.1 } })
  };

  return (
    <>
      <nav className="navbar">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className={`bar ${open ? "open1" : ""}`}></div>
          <div className={`bar ${open ? "open2" : ""}`}></div>
          <div className={`bar ${open ? "open3" : ""}`}></div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay sombre */}
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu coulissant */}
            <motion.ul
              className="nav-links"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {["Accueil", "Services", "Rejoindre", "Contact"].map((link, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setOpen(false)}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
