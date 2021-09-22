import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as publicationsActions  from '../../../actions/publicationsActions';


const PublicationsForm = () => {
  const [publicationsData, setPublicationsData] = useState({ title: '', desctiption: ''});
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(publicationsActions.postPublications('60fcc884bbed863d20b02573', publicationsData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Publications</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="publications-publicationTitle" label="publicationTitle" onChange={(e) => setPublicationsData({ ...publicationsData, publication_title: e.target.value })}/>
            <TextField id="publications-journalConferenceName" label="journalConferenceName" onChange={(e) => setPublicationsData({ ...publicationsData, journal_conference_name: e.target.value })}/>
            <TextField id="publications-otherDetails" label="otherDetails" onChange={(e) => setPublicationsData({ ...publicationsData, other_details: e.target.value })}/>
            <TextField id="publications-coAuthors" label="coAuthors" onChange={(e) => setPublicationsData({ ...publicationsData, coauthors: e.target.value })}/>
            <TextField id="publications-breifDescription" label="breifDescription" onChange={(e) => setPublicationsData({ ...publicationsData, brief_description: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  PublicationsForm;