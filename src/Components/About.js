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
           
               <p>"My path to becoming a full stack web developer has been an interesting one! My original carrer direction was law or social work but through a series of interesting turns I ended up with an MBA and being a minister - go figure that one! My background has provided me with lots of experience managing people and teams and I hope to  incorporate this into my tech career.</p>
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
            <div className="row">
               <div className="columns contact-details">
                  <h2>My Contact Details</h2>
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
