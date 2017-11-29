import qs from 'qs';

const initialState = {
  current: ''
};

const brandMap = {
  topshop: 'Topshop',
  asos: 'ASOS',
  next: 'Next'
};

const brandSwitchReducer = (state = initialState, action) => {
  let query;
  let brand;

  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      query = qs.parse(action.payload.search.replace(/^\?/, ''));
      brand = brandMap[query.brand] ? brandMap[query.brand] : state.current || '';
      return { ...state, current: brand };
    default:
      return state;
  }
};

export default brandSwitchReducer;
