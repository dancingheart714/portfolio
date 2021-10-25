import React, { Component } from 'react';
import Fade from 'react-reveal';
import Emoji from 'a11y-react-emoji';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var profilepic = "images/"+this.props.data.image;
    }

    return (
       <section id="about">
          <Fade duration={1000}>
            <div className="row">
         <div className="three columns">
            <img 
            className="profile-pic"  
            src={profilepic} 
            alt="Leah King Profile Pic"/>
            </div>
          
         <div className="nine columns main-col">
            <h2>About Me</h2>
           
               <p>My path to becoming a full stack web developer has been an exciting one! From my first day at Lambda School my mantra became "I can, and I will do this!"  That mantra drove me through the months of feeling as if I were drinking from a fire hose every single day.  The amount of information and new skills that I was required to take on every day was mind-boggling.  But, here I am a year later knowing how to design, connect, route, debug and so much more! I would not trade that experience for anything!  I love what I am doing and the fact that I get to learn new things every day feeds the part of me that needs to be continually challenged.  My background in the non-profit sector has provided me with lots of experience managing people and teams and I hope to  incorporate this into my tech career.</p>
               <p>In addition to web development, I own an Etsy shop that specializes in kawaii stationary, washi tape and planner supplies.</p>
               <p>A few of my favorite things are:
               <ul>    
                     <li>Cats  {''}<Emoji symbol="😺" label="cat" />{''}</li>
                         
                     <li>Reading  {''}<Emoji symbol="📚" label="books" /> {''}</li>
                         
                     <li>Coffee  {''}<Emoji symbol="☕" label="coffee" /> {''}</li>
                         
                     <li>Sanrio characters  {''}<Emoji symbol="💞" label="hearts" /> {''}  and, of course,</li>
                         
                     <li>Coding  {''}<Emoji symbol="👩‍💻" label="computer" /> {''}</li>                      
               </ul>
                   </p>
               <p>I consider myself a creative soul and I love the process of using the screen as my canvas.  I enjoy using React to develop interactive and responsive front end user-centric web applications.  I also create backend applications in Node and Express.  I thrive in environments where there is collaboration, constant learning and "mistakes" are seen as part of the growth experience.  I'm dependable and hard working; I can communicate effectively whether it be with a team or stakeholders;  I value a sense of humor, creating relationship, integrity, and empathy and I firmly believe in the synergistic power of teamwork! </p> 
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span>				
                   <br />
						   <span>{phone}</span>
                  <br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button">
                     <i className="fa fa-download"></i>Download My Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </Fade>
   </section>
   );
  }
}

export default About;
