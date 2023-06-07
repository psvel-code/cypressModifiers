class modifiers {
  Heading = "Modifiers";
  headText = "Add Modifiers and Modifier Set here...";
  modifierOptions = "Modifier Options";
  modifierOptionsText =
    " Options are used to customize, offer additional choices, or further define the products that are being ordered. ";
  modifierOptionsNote =
    "Note : Add Modifier Options before adding Modifier Sets";
  modifierSet = "Modifier Set";
  modifierSetText =
    " A collection of modifier options is added to a modifier set which helps to organize the options for a better understanding. ";
  elements = {
    headerHeading: () => cy.get(".header-card-title"),
    headerText: () => cy.get(".header-card-subtitle"),
    modifiersOptionsPic: () =>
      cy.get(
        '[style="flex-direction: column; box-sizing: border-box; display: flex; place-content: center; align-items: center; margin-right: 50px;"] > .image-size'
      ),
    modifiersSetPic: () =>
      cy.get(
        '[style="flex-direction: column; box-sizing: border-box; display: flex; place-content: center; align-items: center;"] > .image-size'
      ),
    modifierOptionsHead: () =>
      cy.get(
        '[style="flex-direction: column; box-sizing: border-box; display: flex; place-content: center; align-items: center; margin-right: 50px;"] > .modifier-text-content > .modifier-heading-text'
      ),
    modifierOptionsText: () => cy.get(".modifier-text-content"),
    modifierOptionsNote: () =>
      cy.get(".modifier-text-content > .ng-star-inserted"),
    modifierSetHead: () =>
      cy.get(
        '[style="flex-direction: column; box-sizing: border-box; display: flex; place-content: center; align-items: center;"] > .modifier-text-content > .modifier-heading-text'
      ),
    modifierButton: () => cy.get('[data-control="link-button"]'),

  };
}
export default modifiers;
