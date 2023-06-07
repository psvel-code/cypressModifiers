import modifierSet from "../PO/modifierSet";
const modifierSetPage = new modifierSet();
describe("modifierSetPage page", () => {
  it("modifierSetPage page Exist", () => {
    modifierSetPage.elements.modifierButton().eq(1).click();
    cy.wait(1000);
    expect(modifierSetPage.elements.HeaderHeading().should("exist"));
    expect(modifierSetPage.elements.HeaderHeading().should("contain.text", modifierSetPage.modifierSet));
    expect(modifierSetPage.elements.HeaderText().should("exist"));
    expect(modifierSetPage.elements.HeaderText().should("contain.text", modifierSetPage.HeaderText));
    expect(modifierSetPage.elements.back().should("exist"));
    expect(modifierSetPage.elements.back().should("contain.text", modifierSetPage.back));
    expect(modifierSetPage.elements.AddModifier().should("exist"));
    expect(modifierSetPage.elements.AddModifier().should("contain.text", modifierSetPage.addModifierSet));
  });
  it("modifierSetPage Search button Exist", () => {
    expect(modifierSetPage.elements.searchBtn().should("exist"));
    expect(modifierSetPage.elements.searchIcon().should("exist"));
    expect(modifierSetPage.elements.importIcon().should("exist"));
    expect(modifierSetPage.elements.exportIcon().should("exist"));
  });
  it("modifierSetPage Table Exist", () => {
    cy.get("body").then(($body) => {
      if ($body.find(".cardHeader ").is(":visible")) {
        for (let i = 0; i < 3; i++) {
          expect(modifierSetPage.elements.tableHeader().eq(i).should("exist"));
          expect(modifierSetPage.elements.tableHeader().eq(i).should("contain.text", modifierSetPage.tableHeader[i]));
        }
        for (let i = 0; i < 3; i++) {
          expect(modifierSetPage.elements.paginatoIcon().eq(i).should("exist"));
        }
      }
      else {
        expect(modifierSetPage.elements.emptyDataImg().should("exist"));
        expect(modifierSetPage.elements.emptyDataText().should("exist"));
        expect(modifierSetPage.elements.emptyDataText().should("contain.text", modifierSetPage.emptyDataText));
      }
    });
    it("modifierSetPage Table Exist", () => {

    });
    modifierSetPage.elements.back().click();
  });
});
