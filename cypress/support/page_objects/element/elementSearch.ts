const elementSearch = {

    username: () => cy.get('[placeholder="ID"]'),
    password: () => cy.get('[placeholder="Password"]'),
    login: () => cy.get('[class="btnLogin"]'),
    wait: () => cy.wait(12000),
    usermodule: () => cy.get('.User > button').contains('USER'),

    adduser: () => cy.get('#lnbButtonsUserGroup > .btnColorPoint').contains('ADD USER'),
    tabstatus: () => cy.get('#lnbButtonsUserGroup > .btnColorPoint'),
    tabuser: () => cy.get('.tabTypeA > :nth-child(2) > .ng-binding'),
    userAdministatordetail: () => cy.get('#datagrid-row-r2-2-0 > [field="name"] > .datagrid-cell > :nth-child(1) > span').contains('Administrator'),
    logout: () => cy.get('.logout'),
    fieldName: () => cy.get('[sp-unit-id="707a56e5-7e8c-4592-a6b9-f06962d1af03"] > div > .input'),
    fieldDepartment: () => cy.get('#department'),

    fieldID: () => cy.get('[sp-unit-id="cb49e135-f46c-4a2b-b9c7-becf1645e290"] > div > .input'),
    fieldIDRandom: () => cy.get('[sp-unit-id="cb49e135-f46c-4a2b-b9c7-becf1645e290"] > div > .input'),
    
    fieldEmail: () => cy.get('#userEmail'),
    fieldTitle: () => cy.get('#user_title'),
    fieldTelephone: () => cy.get('[sp-unit-id="74d89a66-7871-4344-b1bc-8798e6b7f685"] > div > .input'),
    submit: () => cy.get('#button'),
    cancel: () => cy.get('.btnColorGray'),


}

export default elementSearch;