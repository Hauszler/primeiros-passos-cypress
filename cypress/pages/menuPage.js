class menuPage{
    selectorsList(){
        const selector = {
        myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selector
    }
accessMyInfo(){
    cy.get(this.selectorsList().myInfoButton).click()
}

}

export default menuPage