import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  const navItems = [
    { key: "home", label: t("navHome") },
    { key: "services", label: t("navServices") },
    { key: "designs", label: t("navDesigns") },
    { key: "works", label: t("navWorks") },
    { key: "contact", label: t("navContact") }
  ];

  return (
    <motion.header
      className="navbar-modern navbar-orange"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-logo">{t("brandName")}</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item, i) => (
          <motion.a
            href={`#${item.key}`}
            className="nav-animated"
            key={item.key}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            whileHover={{ scale: 1.1, color: "#ff7f11" }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      <motion.a
        href="tel:+919849499223"
        className="navbar-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t("getQuote")}
      </motion.a>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.header>
  );
};

export default Navbar;
