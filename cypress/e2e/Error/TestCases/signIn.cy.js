import signIn from "../PO/signIn";
const signInPage = new signIn();
describe("signIn page", () => {
  it("launch app", () => {
    cy.visit(signInPage.webPageUrl);
  });
  it("signIn", () => {
    signInPage.elements.matFormField().eq(0).type(signInPage.email);
    signInPage.elements.matFormField().eq(1).type(signInPage.password);
    signInPage.elements.signIn().click();
    signInPage.elements.products().click();
    cy.wait(3000);
    signInPage.elements.modifiers().click();
    cy.wait(3000);
  });
});
