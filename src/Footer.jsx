import React from "react";

function Footer() {
  var date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <p>copyright@ {year}</p>
    </footer>
  );
}

export default Footer;
