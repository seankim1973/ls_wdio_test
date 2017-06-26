class LoginPage {

  // elements
  get extensionField() { return browser.element('id#ext_field') }
  get loginButton() { return browser.element('id#login_button') }


  // page methods
  visit() {
    browser.url('file:///' + __dirname + '../../../tests/test_pages/test_page_1.html')
  }

  title() {
    return browser.getTitle()
  }

  login() {
    // what am I supposed to do again?
  }
}

export default LoginPage
