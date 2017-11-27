import { SWITCH_BRAND } from './branchSwitchActions';

const initialState = {
  current: ''
};

const brandSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_BRAND:
      return { ...state, current: action.brand };
    default:
      return state;
  }
};

export default brandSwitchReducer;
