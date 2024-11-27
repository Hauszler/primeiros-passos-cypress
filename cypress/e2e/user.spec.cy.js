import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashBoardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orage HRM Tests', () => {


// const selectorsList= { 
  
//   firstNameField: "[name='firstName']",
//   middleNameField: "[name='middleName']",
//   lastNameField: "[name='lastName']",
//   genericField: ".oxd-input--active",
//   genericDate: "[placeholder='yyyy-dd-mm']",
//   dateCloseButton: ".--close",
//   submitButton: "[type='submit']",
//   dropdownSelector: "[tabindex='0']",
//   genderChoice: ".oxd-radio-wrapper",
//   testField: "[options='']"
// }

  it('Login - Success', () => {
    //
    //cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    //cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    //cy.get(selectorsList.loginButton).click()
    // trocar por esse de baixo
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.dashBoardGrid)
    dashBoardPage.checkLocation()

    // cy.get(selectorsList.myInfoButton).click()
    menuPage.accessMyInfo()
    
    // cy.get(selectorsList.firstNameField).clear().type("André")
    // cy.get(selectorsList.middleNameField).clear().type("Sou")
    // cy.get(selectorsList.lastNameField).clear().type("Eu")
    // cy.get(selectorsList.genericField).eq(3).clear().type("IdTest")
    // cy.get(selectorsList.genericField).eq(4).clear().type("OtherIDTest")
    // cy.get(selectorsList.genericField).eq(5).clear().type("CNH12312")
    // cy.get(selectorsList.genericDate).eq(0).clear().type("2022-26-08")
    // cy.get(selectorsList.dateCloseButton).click()
    
    // //desafio
    // cy.get(selectorsList.dropdownSelector).eq(0).click({force: true})
    // cy.get('.oxd-select-dropdown > :nth-child(7)').click()
    // cy.get(selectorsList.dropdownSelector).eq(1).click({force: true})
    // cy.get('.oxd-select-dropdown > :nth-child(4)')
    // //fim desafio

   

    // //all by my self....
    // cy.get(selectorsList.genericDate).eq(1).clear().type("1989-14-10")
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genderChoice).eq(1).click()

//***trocar tudo de cima por essa de baixo */
    myInfoPage.personalDetails("José","Silva", "Sauro", 939393, 9999, 123456,"2023-04-04","1989-10-10")

    // //save profile (firstBtn)
    // cy.get(selectorsList.submitButton).eq(0).click({force : true})
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
    //trocar o de cima por:
    myInfoPage.savePersonalDetails()
    
    // //all by my self... pt2
    // cy.get(selectorsList.dropdownSelector).eq(2).click({force: true})
    // cy.get('.oxd-select-dropdown > :nth-child(6)')
    // cy.get(selectorsList.testField).clear().type("Alo alo, teste!")
    // cy.get(selectorsList.submitButton).eq(1).click()
    // cy.get('.oxd-toast-close')
    // trocar o de cima por:
    myInfoPage.custonField("alo alo teste")
    
  })
  it.only('Login - Fail', () => {
    //cy.visit('/auth/login')
    loginPage.accessLoginPage()
    // cy.get(selectorsList.usernameField).type(userData.userFail.username)
    // cy.get(selectorsList.passwordField).type(userData.userFail.password)
    // cy.get(selectorsList.loginButton).click()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    // cy.get(selectorsList.wrongCredentialAlert)
    loginPage.checkInvalidLogin()
    
  })
})