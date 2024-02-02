// exportnya spesifik
import { elementSearch } from "./element";

const element = {

  inputUsername : () => {
    elementSearch.username().type('admin');
  },
  inputPassword : () => {
    elementSearch.password().type('admin1234!');
  },
  loginButton : () => {
    elementSearch.login().click();
  },

  waitBrowserpage : () => {
    elementSearch.wait()
  },

  clickAddNewUser : () => {
    elementSearch.adduser().click()
  },

  inputfieldName : () => {
    elementSearch.fieldName().type('Willy F');
  },

  inputfieldDepartement : () => {
    elementSearch.fieldDepartment().type('Tech and Product');
  },

  inputfieldIDsame : () => {
    elementSearch.fieldID().type('11223344');
  },

  inputfieldID : () => {
    elementSearch.fieldID().type(userID_Numeric())
    function userID_Numeric() {
    var text = "";
    var possible = "123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };
  },

  inputfieldEmailAlphabet : () => {
    elementSearch.fieldEmail().type(userID_alpha())
    function userID_alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  },

  inputfieldEmail : () => {
    elementSearch.fieldEmail().type('@gmail.com');
  },

  inputfieldSameEmail : () => {
    elementSearch.fieldEmail().type('cekpointesting@gmail.com');
  },

  inputfieldTitle : () => {
    elementSearch.fieldTitle().type('QA Engineer');
  },

  inputfieldPhone : () => {
    elementSearch.fieldTelephone().type('08119911119');
  },

  clickSubmitButton : () => {
    elementSearch.submit().click();
  },

  clickUserModul : () => {
    elementSearch.usermodule().click();
  },

  clickUserDetail : () => {
    elementSearch.userAdministatordetail().click();
  },


  
}
export const inputHomePage = element