import { connect } from 'react-redux';
import { showContactFormDataAction } from '../../state/contactForm/contactFormActions';

export const mapStateToProps = state => ({
  brand: state.brand.current
});

export const mapDispatchToProps = ({
  showContactFormDataAction
});

export default connect(mapStateToProps, mapDispatchToProps);
