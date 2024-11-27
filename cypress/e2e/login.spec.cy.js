import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashBoardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Login - Orage HRM Tests', () => {

  it('Login - Success', () => {
  
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    
    dashBoardPage.checkLocation()
    
  })
  
  it('Login - Fail', () => {
    
    loginPage.accessLoginPage()
    
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    
    loginPage.checkInvalidLogin()
    
  })
})