import React from "react";

function Header(props) {
  const { setSelected } = props

  function Nav(props) {
    const { setSelected } = props
    return (
      <div className='Nav'>
        <div className='button-con' >
          <button onClick={() => setSelected('AboutMe')}>
            About Me
          </button >
        </div>
        <div className='button-con' >
          <button id='portfolio' onClick={() => setSelected('Portfolio')}>
            Porfolio
          </button >
        </div>
        <div className='button-con' >
          <button id='contact' onClick={() => setSelected('Contact')}>
            Contact
          </button >
        </div>
        <div className='button-con' >
          <button id='resume' onClick={() => setSelected('Resume')}>
            Resume
          </button >
        </div>
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