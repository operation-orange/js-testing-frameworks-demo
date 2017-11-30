import Page from '../../Page';
import MainHeader from '../components/MainHeader';

export default class Contact extends Page {
  constructor(world) {
    super(world, '/contact', {
      name: '[data-qa-id=name-field]',
      nameError: '[data-qa-id=name-field-error]',
      email: '[data-qa-id=email-field]',
      emailError: '[data-qa-id=email-field-error]',
      message: '[data-qa-id=message-field]',
      messageError: '[data-qa-id=message-field-error]',
      submit: '[data-qa-id=submit-button]',
      submitError: '[data-qa-id=submit-button-error]',
      submittedText: '[data-qa-id=submitted-text]'
    });

    this.compose(MainHeader);
  }
}
