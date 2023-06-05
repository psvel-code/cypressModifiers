class ModifierOptions {
  tableHeader = ["Modifier Option Name", "Price", "Actions"];
  elements = {
    HeaderHeading: () => cy.get('[fxlayout="row"] > .ng-star-inserted > span'),
    HeaderText: () => cy.get(".header-card-subtitle"),
    back: () => cy.get('[data-control="Back"]'),
    AddModifier: () => cy.get('[data-control="Add Modifier Option"]'),
    tableHeader: () => cy.get(".cardHeader"),
  };
}
export default ModifierOptions;
