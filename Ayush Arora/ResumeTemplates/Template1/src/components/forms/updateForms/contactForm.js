import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as contactActions  from '../../../actions/contactActions';
import { useParams } from "react-router-dom";

const ContactForm = () => {
  const [contactData, setContactData] = useState({ address1: '', address2: '', address_city: '', address_country: '', pincode: '', phone_number: '', mail_id: '', web_resume: '', github: '', linkedIn: ''});
  const dispatch = useDispatch();
  let { elementId } = useParams();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(contactActions.patchContact('60fcc884bbed863d20b02573', elementId, contactData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Contact</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="contact-address1" label="Address 1" onChange={(e) => setContactData({ ...contactData, address1: e.target.value })}/>
            <TextField id="contact-address2" label="Address 2" onChange={(e) => setContactData({ ...contactData, address2: e.target.value })}/>
            <TextField id="contact-addressCity" label="Address City" onChange={(e) => setContactData({ ...contactData, address_city: e.target.value })}/>
            <TextField id="contact-addressState" label="Address State" onChange={(e) => setContactData({ ...contactData, address_state: e.target.value })}/>
            <TextField id="contact-addressCountry" label="Address Country" onChange={(e) => setContactData({ ...contactData, address_country: e.target.value })}/>
            <TextField id="contact-pincode" label="Pincode" onChange={(e) => setContactData({ ...contactData, pincode: e.target.value })}/>
            <TextField id="contact-phoneNumber" label="Phone Number" onChange={(e) => setContactData({ ...contactData, phone_number: e.target.value })}/>
            <TextField id="contact-mailId" label="Mail ID" onChange={(e) => setContactData({ ...contactData, mail_id: e.target.value })}/>
            <TextField id="contact-webResume" label="Web Resume" onChange={(e) => setContactData({ ...contactData, web_resume: e.target.value })}/>
            <TextField id="contact-github" label="Github" onChange={(e) => setContactData({ ...contactData, github: e.target.value })}/>
            <TextField id="contact-linkedIn" label="LinkedIn" onChange={(e) => setContactData({ ...contactData, linkedIn: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  ContactForm;