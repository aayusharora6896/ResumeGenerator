import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as projectsActions from "../../actions/projectsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectsForm  from "../forms/updateForms/projectsForm";

// var project_data = {
//     project_title: "Cafe Azure Landing Page",
//     skills_used: "React, CSS, HTML, JavaScript, Hooks",
//     description1: "Created a beautiful landing page for Cafe Azure based in Miami.",
//     description2: "The website is designed with amazing animations and parallex affect and an amazing color palette derived from the signature dish at the Cafe. ",
// };

const Projects = () => {
    const dispatch = useDispatch();
          useEffect(() => {
        const userProjects = async () => {
          await dispatch(projectsActions.getProjects('60fcc884bbed863d20b02573'));
        };
        userProjects();
      }, [dispatch]);
    
      const project_data = useSelector((state) => state.projects.projects);
     
    return (
      <Router>
        <div>
           <p>Projects</p>
           <hr/>
           { project_data.map((value, index) => {
             return(
               <div key={index}>
                  <p><strong>{ value.project_title}</strong></p>
                  <p>{ value.skills_used}</p> 
                  <p>{ value.description1}</p> 
                  <p>{ value.description2}</p>    
                <DeleteButton elementId = { value._id } page = { "Projects" }/>
                <Link to={ `/projects/${value._id}/update` } ><UpdateButton /></Link>
               </div>  
             )
           })}
        </div>
        <Switch>
          <Route path="/projects/:elementId/update">
          <ProjectsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Projects
