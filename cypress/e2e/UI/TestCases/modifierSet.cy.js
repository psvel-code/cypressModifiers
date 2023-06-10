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
  it("Add Modifier set form Exist", () => {
    modifierSetPage.elements.AddModifier().click();
    cy.wait(4000);
    expect(modifierSetPage.elements.dialogClose().should("exist"));
    expect(modifierSetPage.elements.matDialogTitle().should("exist"));
    expect(modifierSetPage.elements.matDialogTitle().should("contain.text", modifierSetPage.addDialogHeader));
    expect(modifierSetPage.elements.modifierSetName().should("exist"));
    expect(modifierSetPage.elements.modifierSetaltName().should("exist"));
    expect(modifierSetPage.elements.selectModifierOpt().should("exist"));
    expect(modifierSetPage.elements.dialogButtons().eq(0).should("exist"));
    expect(modifierSetPage.elements.dialogButtons().eq(0).should("contain.text", modifierSetPage.Cancel));
    expect(modifierSetPage.elements.dialogButtons().eq(1).should("exist"));
    expect(modifierSetPage.elements.dialogButtons().eq(1).should("contain.text", modifierSetPage.Save));
    modifierSetPage.elements.dialogClose().click();
  });

  it("Edit Modifier set form Exist", () => {
    modifierSetPage.elements.edit().click();
    cy.wait(2000);
    expect(modifierSetPage.elements.editDialogClose().should("exist"));
    expect(modifierSetPage.elements.matDialogTitle().should("exist"));
    expect(modifierSetPage.elements.matDialogTitle().should("contain.text", modifierSetPage.EditModifierSet));
    expect(modifierSetPage.elements.modifierSetName().should("exist"));
    expect(modifierSetPage.elements.modifierSetaltName().should("exist"));
    expect(modifierSetPage.elements.selectModifierOpt().should("exist"));
    expect(modifierSetPage.elements.dialogButtons().eq(0).should("exist"));
    expect(modifierSetPage.elements.dialogButtons().eq(0).should("contain.text", modifierSetPage.Cancel));
    expect(modifierSetPage.elements.dialogButtons().eq(1).should("exist"));
    expect(modifierSetPage.elements.dialogButtons().eq(1).should("contain.text", modifierSetPage.Update));
    modifierSetPage.elements.editDialogClose().click();

  });
  it("modifierSetPage Search button Exist", () => {
    expect(modifierSetPage.elements.searchBtn().should("exist"));
    expect(modifierSetPage.elements.searchIcon().should("exist"));
    expect(modifierSetPage.elements.importIcon().should("exist"));
    expect(modifierSetPage.elements.exportIcon().should("exist"));
  });
  it("modifierSetPage Search not found", () => {
    expect(modifierSetPage.elements.searchBtn().type(modifierSetPage.dummySearch));
    cy.wait(3000);
    expect(modifierSetPage.elements.emptyText().should("exist"));
    expect(modifierSetPage.elements.emptyText().should("contain.text", modifierSetPage.emptyText));
    expect(modifierSetPage.elements.emptyImg().should("exist"));
    cy.wait(500);
    modifierSetPage.elements.searchBtn().clear();
    cy.wait(2000);
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
    cy.wait(2000);
    modifierSetPage.elements.profileImg().click();
    modifierSetPage.elements.logOut().click();


  });
});
