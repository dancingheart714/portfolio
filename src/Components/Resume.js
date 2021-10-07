import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="ed_info" >{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="work_info">{work.description}</p>
        </div>
      })  
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      

      <div className="row skill">
        
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <h3 className="skills_message">My current skill set includes:</h3>
            <p>                     </p>  
            <ul className="skills_list">
                <li>Agile Project Management</li><li>Authentication</li> <li>Automated Unit Testing</li><li>Computer Architecture</li><li>Data Structures</li> <li>Debugging</li><li>Deployment</li><li>End-to-End testing</li><li>Relational Databases</li><li>Teamwork and Collaboration</li><strong><li>Express</li><li>HTML5</li><li>CSS</li><li>JavaScript</li> <li>React</li><li>PostgreSQL</li><li>Redux</li><li>NodeJS</li><li>Python</li><li>GitHub</li><li>VS Code</li></strong>
              </ul>
                    
    <div class="skill_icons">
    <img src="https://img.icons8.com/color/2x/html-5.png"alt="icon"/>
    <img src="https://img.icons8.com/color/2x/css.png" alt="icon"/>
    <img src="https://img.icons8.com/color/2x/javascript.png" alt="icon"/>  
    <img src="https://img.icons8.com/ultraviolet/2x/react.png" alt="icon"/> 
    <img src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="icon"/>
    <img src="https://img.icons8.com/color/2x/redux.png" alt="icon"/>  
    <img src="https://img.icons8.com/color/2x/nodejs.png" alt="icon"/> 
    <img src="https://img.icons8.com/color/2x/python.png" alt="icon"/> 
    <img src="https://img.icons8.com/ios-glyphs/2x/github-2.png" alt="icon"/>
    <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="icon"/>
    </div> 

			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
