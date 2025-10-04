import { useEffect, useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Valerie | AA
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  )
}