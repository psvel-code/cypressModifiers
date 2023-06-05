import modifierOptions from "../PO/modifierOptions";
const modifierOptionsPage = new modifierOptions();
describe("modifierOptions page", () => {
  it("modifierOptions page Exist", () => {
    expect(modifierOptionsPage.elements.HeaderHeading().should("exist"));
    expect(modifierOptionsPage.elements.HeaderText().should("exist"));
    expect(modifierOptionsPage.elements.back().should("exist"));
    expect(modifierOptionsPage.elements.AddModifier().should("exist"));
    for (let i = 0; i < 3; i++) {
      expect(modifierOptionsPage.elements.tableHeader().eq(i).should("exist"));
      expect(
        modifierOptionsPage.elements
          .tableHeader()
          .eq(i)
          .should("contain.text", modifierOptionsPage.tableHeader[i])
      );
    }
  });
});
