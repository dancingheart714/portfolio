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
           
               <p>My path to becoming a full stack web developer has been an exciting one! From my first day at Lambda School my mantra became "I can, and I will do this!"  That mantra drove me through the months of feeling as if I were drinking from a fire hose every single day.  The amount of information and new skills that I was required to take on every day was mind-boggling.  But, here I am a year later knowing how to design, connect, route, debug and so much more! I would not trade that experience for anything!  I love what I am doing and the fact that I get to learn new things every day feeds the part of me that needs to be continually challenged.</p>  <p>My career in the non-profit sector as a Co-Minister and Program Manager have provided me with a rich skillset that includes strong organizational and interpersonal skills as well as team building and being a servant-leader. I recently became a Certified Scrum Master with the intent of blending my management experience with my love of web development.</p>
               <p>In addition, I own a successful online store that I grew from the ground up that specializes in kawaii stationary, washi tape and planner supplies.  The business originally began on Etsy and I just recently transitioned to a Shopify storefront and I have learned a lot in that process! </p>
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
                         <p></p>
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span>				
                   <br />
						   <span>{phone}</span>
                  <br />
                     {/* <span>{email}</span> */}
					   </p>
                      </div>
                      <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button">
                        <i className="fa fa-download"></i>Download My Resume</a>
                     
                        <a href="https://drive.google.com/file/d/1_cRFvvsIOwj3sSU_-5IArADs-QdbKAJq/view?usp=sharing" className="button">
                        <i className="fa fa-download"></i>View My CSM</a>                       
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
