//========================= GLOBAL VARIABLE =================================//
import { inputHomePage } from "../../support/page_objects/homepage";

const web = Cypress.env('ALPHA_BASE_URL');

describe('Login', () => {

  beforeEach(function() {
    cy.checkURL(web);
  })

//POSITIVE CASE : Success When Add User Normally 
  it('as a user, i can add User Normally', () => {
    inputHomePage.waitBrowserpage();
    inputHomePage.inputUsername();
    inputHomePage.inputPassword();
    inputHomePage.loginButton();
    inputHomePage.waitBrowserpage();
    inputHomePage.clickUserModul();
    inputHomePage.waitBrowserpage();
    inputHomePage.clickAddNewUser();
    inputHomePage.inputfieldName();
    inputHomePage.inputfieldDepartement();
    inputHomePage.inputfieldID();
    inputHomePage.inputfieldEmailAlphabet();
    inputHomePage.inputfieldEmail();
    inputHomePage.inputfieldTitle();
    inputHomePage.inputfieldPhone();
    inputHomePage.clickSubmitButton();
    Cypress.Screenshot.defaults({ capture: 'runner' });
  })
  //END POSITIVE CASE : Success When Add User Normally 

  //NEGATIVE CASE : Failed When Add User not input all fields
  it('as a user, i can add User when not input all fields ', () => {
    inputHomePage.waitBrowserpage();
    inputHomePage.clickUserModul();
    inputHomePage.waitBrowserpage();
    inputHomePage.clickAddNewUser();
    inputHomePage.clickSubmitButton();
    Cypress.Screenshot.defaults({ capture: 'runner' });
  })
  //END NEGATIVE CASE : Success When Add User not input all fields

  //Negative CASE : Failed when input same ID current User
  it('as a user, i cant add User when input same ID current User', () => {
    inputHomePage.waitBrowserpage();
    inputHomePage.clickUserModul();
    inputHomePage.waitBrowserpage();
    inputHomePage.clickAddNewUser();
    inputHomePage.inputfieldName();
    inputHomePage.inputfieldDepartement();
    inputHomePage.inputfieldIDsame();
    inputHomePage.inputfieldEmailAlphabet();
    inputHomePage.inputfieldEmail();
    inputHomePage.inputfieldTitle();
    inputHomePage.inputfieldPhone();
    inputHomePage.clickSubmitButton();
    Cypress.Screenshot.defaults({ capture: 'runner' });
  })
  //END NEGATIVE CASE : Failed when input same ID current User

  //Negative CASE : Failed when input same Email current User
  it('as a user, i cant add User when input same Email current User', () => {
    inputHomePage.waitBrowserpage();
    inputHomePage.clickUserModul();
    inputHomePage.waitBrowserpage();
    inputHomePage.clickAddNewUser();
    inputHomePage.inputfieldName();
    inputHomePage.inputfieldDepartement();
    inputHomePage.inputfieldID();
    inputHomePage.inputfieldSameEmail();
    inputHomePage.inputfieldTitle();
    inputHomePage.inputfieldPhone();
    inputHomePage.clickSubmitButton();
    Cypress.Screenshot.defaults({ capture: 'runner' });
  })
  //END NEGATIVE CASE : Failed when input same Email current User

  //Positve CASE : Success when direct to User Detail
  it('as a user, i can direct User when click one of the User list', () => {
      inputHomePage.waitBrowserpage();
      inputHomePage.clickUserModul();
      inputHomePage.clickUserDetail();
      Cypress.Screenshot.defaults({ capture: 'runner' });
    })
  //END Positve CASE : Success when direct to User Detail


})  