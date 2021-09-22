import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as skillsActions from "../../actions/skillsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SkillsForm  from "../forms/updateForms/skillsForm";

////////// TODO Change the way script is stored so that we can add rating of efficiancy.
// var skill_data = {
//      skills_title : "Coding Languages",
//      skillSet : ["C", "C++", "JAVA", "C#", "Python"],
// }

const Skills = () => {
    const dispatch = useDispatch();
    useEffect(() => {
  const userSkills = async () => {
    await dispatch(skillsActions.getSkills('60fcc884bbed863d20b02573'));
  };
  userSkills();
}, [dispatch]);

const skill_data = useSelector((state) => state.skills.skills);


    return (
      <Router>
        <div>
            <p>Skills</p>
            <hr/>
            {skill_data.map((value, index) => {
              return(
               <div key={index}>
                  <p><strong>{ value.skills_title }</strong></p>
                  <p>{value.skillSet}</p>
                <DeleteButton elementId = { value._id } page = { "Skills" }/>
                <Link to={ `/skills/${value._id}/update` } ><UpdateButton /></Link>
               </div>
              )
            })}   
        </div>
        <Switch>
          <Route path="/skills/:elementId/update">
          <SkillsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Skills
