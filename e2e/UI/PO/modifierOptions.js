class ModifierOptions {
  tableHeader = ["Modifier Option Name", "Price", "Actions"];
  modifierOptions = "Modifier Options";
  back = "Back";
  addModifierOption = "Add Modifier Option";
  HeaderText = "List of your Modifier options Here..";
  elements = {
    HeaderHeading: () => cy.get('[fxlayout="row"] > .ng-star-inserted > span'),
    HeaderText: () => cy.get(".header-card-subtitle"),
    back: () => cy.get('[data-control="Back"]'),
    AddModifier: () => cy.get('[data-control="Add Modifier Option"]'),
    tableHeader: () => cy.get(".cardHeader"),
    searchBtn: () => cy.get('[data-control="search"]'),
    searchIcon: () => cy.get('[data-control="search-icon"]'),
    importIcon: () => cy.get('[data-control="importFunction"]'),
    exportIcon: () => cy.get('[data-control="exportCall"]'),
    paginatorSize: () => cy.get('.mat-paginator-page-size'),
    paginatoIcon: () => cy.get('.mat-paginator-icon'),
  }
}
export default ModifierOptions;
