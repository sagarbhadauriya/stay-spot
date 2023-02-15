import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Find Rooms</span>
        <div className="navItems">
          <button className="navLinks">About Us</button>
          <button className="navLinks">Contact Us</button>
          <button className="navLinks">Privacy</button>
          <button className="navLinks">Terms</button>
          <button className="navButton">Get Your Room Now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar