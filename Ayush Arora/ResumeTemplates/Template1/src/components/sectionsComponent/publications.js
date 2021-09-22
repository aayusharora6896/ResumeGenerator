import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as publicationsActions from "../../actions/publicationsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicationsForm  from "../forms/updateForms/publicationsForm";

// var achievements_data = {
//     title: "Speaker at TEDx",
//     description: "Spoke on the topic - Think before you act",
// }

const Publications = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const userPublications = async () => {
          await dispatch(publicationsActions.getPublications('60fcc884bbed863d20b02573'));
        };
        userPublications();
      }, [dispatch]);
    
      const publications_data = useSelector((state) => state.publications.publications);
    return (
      <Router>
        <div>
          <p>Publications</p>
          <hr/>
          {publications_data.map((value, index) => {
              return ( 
                <div key={index}>         
                <p><strong>{value.publication_title}</strong></p>
                <p>{value.journal_conference_name}, {value.other_details}</p>
                <p>{value.coauthors}</p>
                <p>{value.brief_description}</p>
                <DeleteButton elementId = { value._id } page = { "Publications" }/>
                <Link to={ `/publications/${value._id}/update` } ><UpdateButton /></Link>
                </div>
              );
          })}
        </div>
        <Switch>
          <Route path="/publications/:elementId/update">
          <PublicationsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Publications
