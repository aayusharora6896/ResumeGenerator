import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as experiencesActions from "../../actions/experiencesActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExperiencesForm  from "../forms/updateForms/experiencesForm";

// var experience_data = {
    // job_position: "Intern",
    // company: "Dundies",
    // location: "NYC",
    // start_date: "May 2020",
    // end_date: "August 2020",
    // primary_work_breif: "working in a team to develop a prototype for a award ceremony app",
    // impact1: "worked majorly on developing the API using Node.js",
    // impact2: "created the data models and stored the employee data on a MongoDB serv..."
// };


const Experiences = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const userExperiences = async () => {
          await dispatch(experiencesActions.getExperiences('60fcc884bbed863d20b02573'));
        };
        userExperiences();
      }, [dispatch]);
    
      const experience_data = useSelector((state) => state.experiences.experiences);
    return (
      <Router>
        <div>
            <p>Experiences</p>
            <hr/>
            {experience_data.map((value, index) => {
              return(
                <div key={index}>
                  <p><strong>{ value.job_position }</strong></p>
                  <p> { value.company }, { experience_data.location }    { experience_data.start_date }{ experience_data.end_date }</p>
                  <p> . { value.primary_work_breif } </p>
                  <p> . { value.impact1 } </p>
                  <p> . { value.impact2 } </p>
                <DeleteButton elementId = { value._id } page = { "Experiences" }/>
                <Link to={ `/experiences/${value._id}/update` } ><UpdateButton /></Link>
                </div>  
              );
            })}
        </div>
        <Switch>
          <Route path="/experiences/:elementId/update">
          <ExperiencesForm />
          </Route>
        </Switch>
      </Router>

)
}

export default Experiences
