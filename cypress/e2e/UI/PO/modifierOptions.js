class ModifierOptions {
  tableHeader = ["Modifier Option Name", "Price", "Actions"];
  modifierOptions = "Modifier Options";
  back = "Back";
  addModifierOption = "Add Modifier Option";
  HeaderText = "List of your Modifier options Here..";
  addDialogHeader = "Add Modifier Option";
  editDialogHeader = "Edit Modifier Option";
  Cancel = "Cancel";
  Update = "Update";
  Save = "Save";
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
    matDialogTitle: () => cy.get('.mat-dialog-title'),
    option: () => cy.get('[formcontrolname="optionValue"]'),
    price: () => cy.get('[formcontrolname="price"]'),
    dialogButton: () => cy.get('[data-control="save-button"]'),
    edit: () => cy.get('[data-control="edit0"]'),
    delete: () => cy.get('[data-control="delete0"]'),

  }
}
export default ModifierOptions;
