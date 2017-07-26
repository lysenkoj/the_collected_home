import axios from 'axios';
import {browserHistory} from "react-router";

/* -----------------    ACTIONS     ------------------ */

const SAVE_PHOTO = 'SAVE_PHOTO';


/* ------------   ACTION CREATORS     ------------------ */


export const savePhoto = (photo) => ({
  type: SAVE_PHOTO,
  photo
})



/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = {}, action) {
  switch (action.type) {

    case SAVE_PHOTO:
      return Object.assign({}, previousState, action.photo);

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const addPhoto = (image) => {
  return dispatch => {
    axios.post('/api/uploads', image)
      .then(image => dispatch(savePhoto(image.data)))
      .catch(err => console.error('Photo Failed to Post', err))
  }
}