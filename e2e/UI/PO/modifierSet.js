class ModifierSet {
  tableHeader = ["Modifier Set Name", "Alternate Name", "Actions"];
  modifierSet = "Modifier Set";
  back = "Back";
  addModifierSet = "Add Modifier Set";
  HeaderText = "List of your Modifier set Here..";
  emptyDataText = "No Records Found!";
  elements = {
    HeaderHeading: () => cy.get('[fxlayout="row"] > .ng-star-inserted > span'),
    HeaderText: () => cy.get(".header-card-subtitle"),
    back: () => cy.get('[data-control="Back"]'),
    modifierButton: () => cy.get('[data-control="link-button"]'),
    AddModifier: () => cy.get('[data-control="Add Modifier Set"]'),
    tableHeader: () => cy.get(".cardHeader"),
    searchBtn: () => cy.get('[data-control="search"]'),
    searchIcon: () => cy.get('[data-control="search-icon"]'),
    importIcon: () => cy.get('[data-control="importFunction"]'),
    exportIcon: () => cy.get('[data-control="exportCall"]'),
    paginatorSize: () => cy.get('.mat-paginator-page-size'),
    paginatoIcon: () => cy.get('.mat-paginator-icon'),
    emptyDataImg: () => cy.get('.empty-img'),
    emptyDataText: () => cy.get('.empty-data-css')
  }
}
export default ModifierSet;
