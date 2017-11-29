import { connect } from 'react-redux';

export const mapStateToProps = state => ({
  brand: state.brand.current,
  contactFormSubmitted: state.form.contact && state.form.contact.submitSucceeded
});

export default connect(mapStateToProps);
