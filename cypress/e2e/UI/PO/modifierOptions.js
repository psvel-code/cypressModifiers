class ModifierOptions {
  tableHeader = ["Modifier Option Name", "Price", "Actions"];
  elements = {
    HeaderHeading: () => cy.get('[fxlayout="row"] > .ng-star-inserted > span'),
    HeaderText: () => cy.get(".header-card-subtitle"),
    back: () => cy.get('[data-control="Back"]'),
    AddModifier: () => cy.get('[data-control="Add Modifier Option"]'),
    tableHeader: () => cy.get(".cardHeader"),
    searchBtn: () => cy.get(".ng-tns-c129-78"),
    searchIcon: () => cy.get('[data-control="search-icon"]'),
    importIcon: () => customElements.get('[data-control="importFunction"]'),
    exportIcon: () => customElements.get('[data-control="exportCall"]'),
    paginatoSize: () => mat - paginator - page - size,
  };
}
export default ModifierOptions;
