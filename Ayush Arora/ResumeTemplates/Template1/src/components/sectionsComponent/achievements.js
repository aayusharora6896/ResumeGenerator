import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as achievementsActions from "../../actions/achievementsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AchievementsForm  from "../forms/updateForms/achievementsForm";

// var achievements_data = {
//     title: "Speaker at TEDx",
//     description: "Spoke on the topic - Think before you act",
// }

const Achievements = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const userAchievements = async () => {
          await dispatch(achievementsActions.getAchievements('60fcc884bbed863d20b02573'));
        };
        userAchievements();
      }, [dispatch]);
    
      const achievements_data = useSelector((state) => state.achievements.achievements);
    return (
      <Router>
        <div>
          <p>Achievements</p>
          <hr/>
          {achievements_data.map((value, index) => {
              return ( 
                <div key={index}>         
                <p><strong>{value.title}</strong></p>
                <p>{value.description}</p>
                <DeleteButton elementId = { value._id } page = { "Achievements" }/>
                <Link to={ `/achievements/${value._id}/update` } ><UpdateButton /></Link>
                </div>
              );
          })}
        </div>
        <Switch>
          <Route path="/achievements/:elementId/update">
          <AchievementsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Achievements
