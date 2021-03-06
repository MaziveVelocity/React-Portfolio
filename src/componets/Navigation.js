import React from "react";

function Footer() {
    return (
        <div className="Footer">
            <ul id='footer-icons'>
                <li className='footer-item'>
                    <a href='https://github.com/MaziveVelocity' target='_blank' rel='noreferrer'>
                        <img src='/assets/icons/github.svg' alt='Github Profile' />
                    </a>
                </li>
                <li className='footer-item'>
                    <a href='https://www.linkedin.com/in/cayman-gill-29174a13a/' target='_blank' rel='noreferrer'>
                        <img src='/assets/icons/linkden.svg' alt='Linkden Profile' />
                    </a>
                </li>
                <li className='footer-item'>
                    <a href='https://stackoverflow.com/users/16031565/mazive-velocityy' target='_blank' rel='noreferrer'>
                        <img src='/assets/icons/stackoverflow.svg' alt='Stack Overflow Profile' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;