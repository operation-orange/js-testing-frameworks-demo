
import { connect } from 'react-redux';
import { switchBrandAction } from '../../state/brandSwitch/branchSwitchActions';

export const mapStateToProps = state => ({
  brand: state.brand.current
});

export const mapDispatchToProps = ({
  switchBrandAction
});

export default connect(mapStateToProps, mapDispatchToProps);
