import React from "react";

function Project(props) {
    const { selected } = props
    switch (selected) {
        case 'Portfolio':
            return <Portfolio />;
        case 'Contact':
            return <Contact />;
        case 'Resume':
            return <Resume />;
        default:
            return <AboutMe />;
    }

    function AboutMe() {
        return (
            <div className='About-me project'>
                <h1>About Me</h1>
                <div id='profile'>
                    <img src='/assets/images/headShot.jpg' />
                    <h2>Full Stack developer</h2>
                </div>

                <p>
                    I am an upcoming software developer working towards my skills in web development. I have a long history with software development.
                    My roots started with highschool where I took classes in Begin Programming and Advanced Programming. Later, my interest led me to
                    Game Development course in my senior year. After some time of on and off programming, I'm now working on a certifiaction for Web Development.
                    Here is a page to show case my work.
                </p>
            </div>
        )
    }

    function Portfolio() {
        return (
            <div className='Portfolio project'>
                <h1>Portfolio</h1>
                <a href='https://github.com/MaziveVelocity/AdventureTime-project/raw/main/assets/img/adventure-time-photo.png'>
                    <h1>Adventure Time</h1>
                    <img src='/assets/images/adventure-time-image.png' alt='Sample image of Adventure time web page' />
                </a>
                <a href='https://radiant-tundra-30535.herokuapp.com/'>
                    <h1>Ticket Support</h1>
                    <img src='/assets/images/ticket-support-image.png' alt='Sample image of Adventure time web page' />
                </a>
            </div>
        )
    }

    function Contact() {
        return (
            <div className='Contact project'>
                <h1>Contact</h1>

                <form>
                    <label className='form-content'>
                        Name:
                        
                    </label>
                    <input id='name' name='name' placeholder='Name' required></input>

                    <label className='form-content'>
                        Email:
                    </label>
                    <input id='email' type='email' name='email' placeholder='Email' required></input>

                    <label className='form-content'>
                        Message:
                    </label>
                    <textarea  id='message' type='text' name='message' placeholder='Enter message here' rows='10' required></textarea>
                </form>
            </div>
        )
    }

    function Resume() {
        return (
            <div className='Resume project'>
                <h1>Resume</h1>
                <img src='/assets/images/resume.png' alt='Stack Overflow Profile' />
            </div>
        )
    }
}

export default Project;