import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
// import * as achievementsActions  from '../../actions/achievementsActions';
// import * as contactActions  from '../../actions/contactActions';
// import * as educationActions  from '../../actions/educationActions';
// import * as experiencesActions  from '../../actions/experiencesActions';
// import * as profileActions  from '../../actions/profileActions';
// import * as projectsActions  from '../../actions/projectsActions';
// import * as skillsActions  from '../../actions/skillsActions';

const UpdateButton = ({elementId, page}) => {
    return(
    <Button
        variant="contained"
        color="primary"
        startIcon={<UpdateIcon />}
        // onClick = {handleUpdate}
    >
    Update
    </Button>
    )
}

export default UpdateButton;