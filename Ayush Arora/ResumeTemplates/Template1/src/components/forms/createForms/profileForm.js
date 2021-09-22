import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as profileActions  from '../../../actions/profileActions';

const ProfileForm = () => {
  const [profileData, setProfileData] = useState({ first_name: '', last_name: ''});
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(profileActions.postProfile('60fcc884bbed863d20b02573', profileData));
    e.target.reset();
  }
  
  return (
    <div>
        <p><strong>Profile</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="profile-firstName" label="First Name" onChange={(e) => setProfileData({ ...profileData, first_name: e.target.value })}/>
            <TextField id="profile-lastName" label="Last Name" onChange={(e) => setProfileData({ ...profileData, last_name: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  ProfileForm;