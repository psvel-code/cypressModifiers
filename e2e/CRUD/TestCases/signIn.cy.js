import signIn from "../PO/signIn";
const signInPage = new signIn();
describe("signIn page", () => {
  it("launch app", () => {
    cy.visit(signInPage.webPageUrl);
  });
  it("signIn", () => {
    signInPage.elements.matFormField.eq(0).type("plancheck@mailinator.com");
    signInPage.elements.matFormField.eq(1).type("Admin@1234");
  });
});
