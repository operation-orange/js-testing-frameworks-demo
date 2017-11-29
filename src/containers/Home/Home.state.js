import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export const mapStateToProps = state => ({
  brand: state.brand.current
});

export const mapActionsToProps = {
  push
};

export default connect(mapStateToProps, mapActionsToProps);
