class myInfoPage{
    selectorsList(){
        const selector = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericDate: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            dropdownSelector: "[tabindex='0']",
            genderChoice: ".oxd-radio-wrapper",
            testField: "[options='']"
        }
        return selector
    }

    personalDetails(firstName,middelName,lastName,idTest,otherId,cnh,cnhDate,birthDate){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middelName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(idTest)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(cnh)
        cy.get(this.selectorsList().genericDate).eq(0).clear().type(cnhDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dropdownSelector).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(7)').click()
        cy.get(this.selectorsList().dropdownSelector).eq(1).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(4)')
        cy.get(this.selectorsList().genericDate).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderChoice).eq(1).click()
    }
    savePersonalDetails(){
         cy.get(this.selectorsList().submitButton).eq(0).click({force : true})
         cy.get('.oxd-toast-close')
    }
    custonField(test_field){
        cy.get(this.selectorsList().dropdownSelector).eq(2).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(6)')
        cy.get(this.selectorsList().testField).clear().type(test_field)
    }
    saveCustonField(){
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('.oxd-toast-close')
    }
}



    // //save profile (firstBtn)
   

    // //all by my self... pt2
    // cy.get(selectorsList.dropdownSelector).eq(2).click({force: true})
    // cy.get('.oxd-select-dropdown > :nth-child(6)')
    // cy.get(selectorsList.testField).clear().type("Alo alo, teste!")
    // cy.get(selectorsList.submitButton).eq(1).click()
    // cy.get('.oxd-toast-close')

    export default myInfoPage