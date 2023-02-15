const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currYear} by Manoj S | All rights reserved</p>
    </footer>
  );
}

export default Footer;
