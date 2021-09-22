import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as profileActions from "../../actions/profileActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProfileForm  from "../forms/updateForms/profileForm";

// var first_name = "John";
// var last_name = "Doe";

const Profile = () => {
  const dispatch = useDispatch();
//   const loading = useSelector((state) => state.profile.loading);

  useEffect(() => {
    const userProfile = async () => {
      await dispatch(profileActions.getProfile('60fcc884bbed863d20b02573'));
    };
    userProfile();
  }, [dispatch]);

  const profile = useSelector((state) => state.profile.profile);
  
    return (
      <Router>
        <div>
          {profile.map((value, index) =>{
            return(
              <div key={index}>
                <p>
                  { value.first_name } { value.last_name }
                </p>
                <DeleteButton elementId = { value._id } page = { "Profile" }/>
                <Link to={ `/profile/${value._id}/update` } ><UpdateButton /></Link>
              </div>  
            )
          })}
        </div>
        <Switch>
          <Route path="/profile/:elementId/update">
          <ProfileForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Profile;
