import React from 'react';

const StartSeite = () => {
  return (
    <div className='start' id='start'>
   <nav>
    <h2>Web-<span>Development</span></h2>
    <ul>
        <li><a href="#start">Home</a></li>
        <li><a href="#start">About Me</a></li>
        <li><a href="#start">Services</a></li>
        <li><a href="#start">Skills</a></li>
        <li><a href="#start">Contact Me</a></li>
    </ul>
    <a href="#" className='btn'>Subscribe</a>
   </nav>
   <div className="content">
    <div className="container-text">
      <h4>Hello,my name is</h4>
      <h1>Haj Mohammad <br /> <span>Muhannad</span></h1>
      <h3>I'm a <span>Front-End</span> web developer.</h3>
      <a href="#" className='btn'> Download CV</a>
      <div className="social">
        <a href="#"><img src="public/image/facebook_icon-icons.com_59205.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/muhannad-haj-mohammad-500437270/" target="_blank"><img src="public/image/linkedin_icon-icons.com_65929.png"  alt="" /></a>
        <a href="#"><img src="public/image/social_youtube_2756 (1).png" alt="" /></a>
        <a href="#"><img src="public/image/instagram.png" alt="" /></a>
        
      </div>
    </div>
    <div className="container-images">
      <img src="public/muhannad.png" alt="" />
    </div>
    
    </div>
    <section className="abaut">
      <div className="container-images">
        <img src="public/image/Profile data-amico.png"  alt="" />
      </div>
      {/* <div className="container-texts">
        <h1>About <span>Me</span></h1>
        <h5><span>Frond-End </span>Developer</h5>
        <p></p>
      </div> */}
    </section>
    </div>
  );
}

export default StartSeite;
