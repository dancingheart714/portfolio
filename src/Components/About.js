import React, { Component } from 'react';
import Fade from 'react-reveal';
import resumeData from './resumeData';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
       <section id="about">
          <Fade duration={1000}>
            <div className="row">
         <div className="three columns">
            <img 
            className="profile-pic"  
            src="../../public/images/profilepic.jpg" 
            alt="Leah King Profile Pic"/>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
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
                     <i className="fa fa-download"></i>Download Resume</a>
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
