class dashBoardPage {
    selectorList(){
        const selectors = {
        dashBoardGrid: ".orangehrm-dashboard-grid",
        
    }
    return selectors
}

    checkLocation(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashBoardGrid).should('be.visible')
    }


}

export default dashBoardPage