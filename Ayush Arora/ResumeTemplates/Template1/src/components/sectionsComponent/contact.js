import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as contactActions from "../../actions/contactActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactForm  from "../forms/updateForms/contactForm";

// var contact_data = {
//     address1: "100 This way",
//     address2: "Apt 6",
//     address_city: "City",
//     address_state: "ST",
//     address_country: "USA",
//     pincode: "00000",
//     phone_number: "555-555-5555",
//     mail_id: "j@d.com",
//     web_resume: "www.jd.com",
//     github: "www.github.com/jd",
//     linkedIn: "www.linkedin.com/jd"
// }

const Contact = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const userContact = async () => {
          await dispatch(contactActions.getContact('60fcc884bbed863d20b02573'));
        };
        userContact();
      }, [dispatch]);
    
      const contact_data = useSelector((state) => state.contact.contact);
      
      return (
      <Router>
        <div>
          {contact_data.map((value, index) => {
          return (
            <div key={index}>
              <p><strong>Phone</strong> { value.phone_number } | <strong>Email</strong> { value.mail_id } | <strong>Portfolio</strong> { value.web_resume }</p><p> <strong>Github</strong> { value.github } | <strong>Linkedin</strong> { value.linkedIn } </p>
              <p>{ value.address1 }, { value.address2 }, { value.address_city }, { value.address_state }, { value.address_country }, { value.pincode }</p>
              <DeleteButton elementId = { value._id } page = { "Contact" }/>
              <Link to={ `/contact/${value._id}/update` } ><UpdateButton /></Link>
            </div>
          )
          })}
        </div>
        <Switch>
          <Route path="/contact/:elementId/update">
          <ContactForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Contact
