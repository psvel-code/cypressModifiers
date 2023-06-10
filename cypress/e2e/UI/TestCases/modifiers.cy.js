import modifiers from "../PO/modifiers";
const modifiersPage = new modifiers();
describe("modifier page", () => {
  it("modifier header div", () => {
    expect(modifiersPage.elements.headerHeading().should("exist"));
    expect(
      modifiersPage.elements
        .headerHeading()
        .should("contain.text", modifiersPage.Heading)
    );
    expect(modifiersPage.elements.headerText().should("exist"));
    expect(
      modifiersPage.elements
        .headerText()
        .should("contain.text", modifiersPage.headText)
    );
  });
  it("modifier options", () => {
    expect(modifiersPage.elements.modifiersOptionsPic().should("exist"));
    expect(modifiersPage.elements.modifierOptionsText().eq(0).should("exist"));
    expect(
      modifiersPage.elements
        .modifierOptionsText()
        .eq(0)
        .should("contain.text", modifiersPage.modifierOptionsText)
    );
    expect(modifiersPage.elements.modifierOptionsNote().should("exist"));
    expect(
      modifiersPage.elements
        .modifierOptionsNote()
        .should("contain.text", modifiersPage.modifierOptionsNote)
    );
    expect(modifiersPage.elements.modifierButton().eq(0).should("exist"));
  });
  it("modifier Set", () => {
    expect(modifiersPage.elements.modifiersSetPic().should("exist"));
    expect(modifiersPage.elements.modifierOptionsText().eq(1).should("exist"));
    expect(
      modifiersPage.elements
        .modifierOptionsText()
        .eq(1)
        .should("contain.text", modifiersPage.modifierSetText)
    );
    expect(modifiersPage.elements.modifierButton().eq(1).should("exist"));
    modifiersPage.elements.modifierButton().eq(0).click();
  });
});
