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
  it("Add Modifier option form Exist", () => {
    modifierOptionsPage.elements.AddModifier().click();
    cy.wait(2000);
    expect(modifierOptionsPage.elements.matDialogTitle().should("exist"));
    expect(modifierOptionsPage.elements.matDialogTitle().should("contain.text", modifierOptionsPage.addDialogHeader));
    expect(modifierOptionsPage.elements.option().should("exist"));
    expect(modifierOptionsPage.elements.price().should("exist"));
    expect(modifierOptionsPage.elements.dialogButton().eq(0).should("exist"));
    expect(modifierOptionsPage.elements.dialogButton().eq(0).should("contain.text", modifierOptionsPage.Cancel));
    expect(modifierOptionsPage.elements.dialogButton().eq(1).should("exist"));
    expect(modifierOptionsPage.elements.dialogButton().eq(1).should("contain.text", modifierOptionsPage.Save));
    modifierOptionsPage.elements.dialogButton().eq(0).click();
  });

  it("Edit Modifier option form Exist", () => {
    modifierOptionsPage.elements.edit().click();
    cy.wait(2000);
    expect(modifierOptionsPage.elements.matDialogTitle().should("exist"));
    expect(modifierOptionsPage.elements.matDialogTitle().should("contain.text", modifierOptionsPage.editDialogHeader));
    expect(modifierOptionsPage.elements.option().should("exist"));
    expect(modifierOptionsPage.elements.price().should("exist"));
    expect(modifierOptionsPage.elements.dialogButton().eq(0).should("exist"));
    expect(modifierOptionsPage.elements.dialogButton().eq(0).should("contain.text", modifierOptionsPage.Cancel));
    expect(modifierOptionsPage.elements.dialogButton().eq(1).should("exist"));
    expect(modifierOptionsPage.elements.dialogButton().eq(1).should("contain.text", modifierOptionsPage.Update));
    modifierOptionsPage.elements.dialogButton().eq(0).click();
  });
  it("modifierOptionsPage Search button Exist", () => {
    expect(modifierOptionsPage.elements.searchBtn().should("exist"));
    expect(modifierOptionsPage.elements.searchIcon().should("exist"));
    expect(modifierOptionsPage.elements.importIcon().should("exist"));
    expect(modifierOptionsPage.elements.exportIcon().should("exist"));
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
