import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as educationActions from "../../actions/educationActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EducationForm  from "../forms/updateForms/educationForm";

// var education_data = {
    // degree_name: "Masters",
    // domain_name: "Information Sciences and Technology",
    // school_name: "iSchool",
    // university_name: "Rochester Institute of Technology",
    // university_city: "Rochester",
    // university_state: "NY",
    // university_country: "USA",
    // year_begin: "2019",
    // month_begin: "August",
    // year_end: "2021",
    // month_end: "December",
    // GPA: "3.8",
// }
 


const Education = () => {
    const dispatch = useDispatch();
    
      useEffect(() => {
        const userEducation = async () => {
          await dispatch(educationActions.getEducation('60fcc884bbed863d20b02573'));
        };
        userEducation();
      }, [dispatch]);
    
      const education_data = useSelector((state) => state.education.education);
    
    return (
      <Router>
        <div>
            <p> Education </p>
            <hr />
            {education_data.map((value, index) => {
              return ( 
                <div key={index}>
                  <p>{ value.university_name }, { value.university_city }, { value.university_state }  { value.month_begin } { value.year_begin } - { value.month_end } { value.year_end }</p>
                  <p>{ value.degree_name } in { value.domain_name } { value.GPA }</p>
                <DeleteButton elementId = { value._id } page = { "Education" }/>
                <Link to={ `/education/${value._id}/update` } ><UpdateButton /></Link>
                </div>
              )
            })}
        </div>
        <Switch>
          <Route path="/education/:elementId/update">
          <EducationForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Education
