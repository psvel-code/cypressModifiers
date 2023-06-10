class ModifierSet {
  tableHeader = ["Modifier Set Name", "Alternate Name", "Actions"];
  modifierSet = "Modifier Set";
  back = "Back";
  addModifierSet = "Add Modifier Set";
  HeaderText = "List of your Modifier set Here..";
  emptyDataText = "No Records Found!";
  addDialogHeader = "Add Modifier Set";
  EditModifierSet = "Edit Modifier Set";
  Cancel = "Cancel";
  Update = "Update";
  Save = "Save";
  dummySearch = "erfghbnm";
  emptyText = "No Records Found!"
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
    emptyDataText: () => cy.get('.empty-data-css'),
    matDialogTitle: () => cy.get('.mat-dialog-title'),
    modifierSetName: () => cy.get('[data-control="modifierName"]'),
    edit: () => cy.get('[data-control="edit0"]'),
    modifierSetaltName: () => cy.get('[data-control="alternateName"]'),
    selectModifierOpt: () => cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'),
    delete: () => cy.get('[data-control="delete0"]'),
    dialogSave: () => cy.get('.mat-dialog-actions > .primary-button'),
    dialogButtons: () => cy.get('[data-control="save-button"]'),
    dialogClose: () => cy.get('#mat-dialog-title-2 > .mat-icon'),
    editDialogClose: () => cy.get('[data-control="modifier-set-close-dialog-icon"]'),
    addModifierSet: () => cy.get('[data-control="Add Modifier Set"]'),
    emptyImg: () => cy.get(".empty-img"),
    emptyText: () => cy.get('[data-control="noRecordFound"]'),
    profileImg: () => cy.get(':nth-child(94) > .mat-menu-trigger > .mat-tooltip-trigger'),
    logOut: () => cy.get('[data-control="onSubMenuCustomLinkClick"]'),
  }
}
export default ModifierSet;
