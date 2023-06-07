import modifierOptions from "../PO/modifierOptions";
const modifierOptionsPage = new modifierOptions();
describe("modifierOptions page", () => {
  it("modifierOptions page Exist", () => {
    expect(modifierOptionsPage.elements.HeaderHeading().should("exist"));
    expect(modifierOptionsPage.elements.HeaderHeading().should("contain.text", modifierOptionsPage.modifierOptions));
    expect(modifierOptionsPage.elements.HeaderText().should("exist"));
    expect(modifierOptionsPage.elements.HeaderText().should("contain.text", modifierOptionsPage.HeaderText));
    expect(modifierOptionsPage.elements.back().should("exist"));
    expect(modifierOptionsPage.elements.back().should("contain.text", modifierOptionsPage.back));
    expect(modifierOptionsPage.elements.AddModifier().should("exist"));
    expect(modifierOptionsPage.elements.AddModifier().should("contain.text", modifierOptionsPage.addModifierOption));

  });


  it("modifierOptions Table Exist", () => {
    cy.get("body").then(($body) => {
      if ($body.find(".cardHeader ").is(":visible")) {
        for (let i = 0; i < 3; i++) {
          expect(modifierOptionsPage.elements.tableHeader().eq(i).should("exist"));
          expect(modifierOptionsPage.elements.tableHeader().eq(i).should("contain.text", modifierOptionsPage.tableHeader[i]));
        }
        for (let i = 0; i < 3; i++) {
          expect(modifierOptionsPage.elements.paginatoIcon().eq(i).should("exist"));
        }
      }
      else {
        expect(modifierOptionsPage.elements.emptyDataImg().should("exist"));
        expect(modifierOptionsPage.elements.emptyDataText().should("exist"));
        expect(modifierOptionsPage.elements.emptyDataText().should("contain.text", modifierSetPage.emptyDataText));
      }
    });
    modifierOptionsPage.elements.back().click();
  });
});
