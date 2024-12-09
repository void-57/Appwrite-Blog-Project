import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logo, LogoutBtn, Container } from "..";
import "../../App.css";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (slug) => {
    navigate(slug);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <Container>
          <button onClick={toggleMenu} className="hamburger-button">
            ☰
          </button>
          <nav className={`menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
            <ul>
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => handleMenuClick(item.slug)}
                        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn onClick={() => setMenuOpen(false)} />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Header;
