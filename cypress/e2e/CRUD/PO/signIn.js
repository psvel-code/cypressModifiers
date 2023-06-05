class signIn {
  webPageUrl = ["https://dev.dashboard.getzenbasket.com/signin"];
  elements = {
    matFormField: () => cy.get(".mat-form-field-wrapper"),
  };
}
export default signIn;
