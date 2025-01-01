import React from "react";
import "./Header.css"; // Import stylów

function Logo() {
  return <div className="header__logo">AnimeMood</div>;
}

function SearchNav() {
  return (
    <div className="header__search">
      <input
        type="text"
        placeholder="Search"
        className="header__search-input"
      />
    </div>
  );
}

function NavLinks() {
  return (
    <nav className="header__nav">
      <a href="#" className="header__link">
        Categories
      </a>
      <a href="#" className="header__link header__link--active">
        Moods
      </a>
    </nav>
  );
}

function NavSocial() {
  return (
    <div className="header__icons">
      <button className="header__icon header__icon--youtube">
        <i className="fa fa-youtube"></i>
      </button>
      <button className="header__icon header__icon--instagram">
        <i className="fa fa-instagram"></i>
      </button>
      <button className="header__icon header__icon--close">
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <NavLinks />
      <SearchNav />
      <NavSocial />
    </header>
  );
}

export default Header;
