class signIn {
  webPageUrl = "https://dev.dashboard.getzenbasket.com/signin";
  email = "plancheck@mailinator.com";
  password = "Admin@1234";
  elements = {
    matFormField: () => cy.get(".mat-form-field-wrapper"),
    signIn: () => cy.get('[data-control="signinfunction"]'),
    products: () =>
      cy.get('[data-control="Products"] > .mat-list-item-content'),
    modifiers: () =>
      cy.get('[data-control="Modifiers"] > .mat-list-item-content'),
  };
}
export default signIn;
