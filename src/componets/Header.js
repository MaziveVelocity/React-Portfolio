import React from "react";

function Header(props) {
  const { setSelected } = props

  function Nav(props) {
    const { setSelected } = props
    return (
        <div className='Nav'>
          <button id='about-me' onClick={() => setSelected('AboutMe')}>
            About Me
          </button >
          <button id='portfolio' onClick={() => setSelected('Portfolio')}>
              Porfolio
          </button >
          <button id='contact' onClick={() => setSelected('Contact')}>
              Contact
          </button >
          <button id='resume' onClick={() => setSelected('Resume')}>
              Resume
          </button >
        </div>
    )
  }

  return (
    <div className="Header">
      <h1>Cayman Gill</h1>
      <nav>
        <Nav setSelected={setSelected} />
      </nav>
    </div>
  );
}

export default Header;