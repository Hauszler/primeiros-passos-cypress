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



  it('User Profile', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashBoardPage.checkLocation()
    menuPage.accessMyInfo()
    myInfoPage.personalDetails("José","Silva", "Sauro", 939393, 9999, 123456,"2023-04-04","1989-10-10")
    myInfoPage.savePersonalDetails()
    myInfoPage.custonField("alo alo teste")
    myInfoPage.saveCustonField()
    
  })
})