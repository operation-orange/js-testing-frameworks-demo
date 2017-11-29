import { SHOW_CONTACT_FORM_DATA } from './contactFormActions';

const initialState = {
  show: false
};

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONTACT_FORM_DATA:
      return { ...state, show: true };
    default:
      return state;
  }
};

export default contactFormReducer;
