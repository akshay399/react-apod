import React from "react";
import PropTypes from "prop-types";
function Header({ bgColor, textColor, text }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "💫✨ASTRONOMICAL PICTURE OF THE DAY💫✨",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "wheat",
};

export default Header;
