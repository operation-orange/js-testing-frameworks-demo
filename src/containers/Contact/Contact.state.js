
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
  brand: state.brand.current
});

export default connect(mapStateToProps);
