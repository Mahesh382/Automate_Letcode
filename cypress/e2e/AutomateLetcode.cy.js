describe('Automate Letcode',()=>{
    it('validate certain things', ()=>{
        cy.visit("https://letcode.in/test");
        cy.title().should("include","LetCode - Testing Hub");
        cy.get('.title.is-title.is-size-1-desktop.is-size-3-mobile.is-size-2-tablet.has-text-weight-bold.has-text-primary')
        .should("contain", "Practice and become pro in test automation");
    })

    it('Input', ()=>{
        cy.visit("https://letcode.in/test");
       cy.get('p.card-header-title.is-size-3').contains("Input");
     
       cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-content > .content > .text')
       .should('contain','Interact with different types of input fields')   //text verifications
         
       
       cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item')
       .click()

       //sendkey():This command is used to type text into an input field
       cy.get('#fullName').type("Mahesh");
       cy.get('#fullName').should("have.value",'Mahesh')  //Value pads gareko , so have.value 

       //clear(): The .clear() command is used to clear the text from an input field
       cy.get('#join').clear()

       // To use keyboard Tab.
       //npm install -D cypress-plugin-tab
       //Add cypress tab plugin in support/e2e.js file
       cy.get('#join').type("Mahesh ").tab().type("Mahato");

        //validating text is disabled
       cy.get('#noEdit').should('be.disabled');

       //clear the text
       cy.get('#clearMe').clear()

       //Confirm text is readonly
       cy.get('#dontwrite').should('have.attr','readonly');

       })
    
    it('Radio & CheckBox', ()=>{
        cy.visit("https://letcode.in/test");

        cy.get(':nth-child(4) > .hero-body > div.container > .columns > :nth-child(2) > app-menu > .card > .card-footer > .card-footer-item')
        .click()


        cy.get(".title.is-title.is-size-1-desktop.is-size-3-mobile.is-size-2-tablet.has-text-weight-bold.has-text-primary")
        .contains("Radio & Checkbox")

     

        //Select any one
        cy.get('#yes').should('be.visible') //Checking visibility
        cy.get('#yes').check().should('be.checked')  //selecting and checking select or
         
        cy.get('#no').should('be.visible')
        cy.get('input#no').should('not.be.checked') 
        
         //Cofirm you can select only one radio button
         cy.get('#one').should('be.visible') //Checking visibility
         cy.get('#one').check().should('be.checked')  //selecting and checking select or
          
         cy.get('#two').should('be.visible')
         cy.get('input#two').should('not.be.checked') 


         //Find the bug
         cy.get('#nobug').should('be.visible') //Checking visibility
         cy.get('#nobug').check().should('be.checked')  //selecting and checking select or
          
         cy.get('#bug').should('be.visible')
         cy.get('#bug').should('not.checked') 
          
         //Find which one is selected
         cy.get('#foo').should('be.visible')
         cy.get('#foo').check().should('be.checked')
         //cy.get("cy.get(':nth-child(4) > .control > :nth-child(1)')").should('be.checked').and('have.text','foo')

         //Confirm last field is disabled
         cy.get('#maybe').should('be.visible')
         cy.get('#maybe').should('be.disabled')

         //Find if the checkbox is selected?
         cy.get(':nth-child(6) > .checkbox > input').should('be.checked')

       })

    it('Dropdown with select', ()=>{
        cy.visit('https://letcode.in/test');
        cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(3) > app-menu > .card > .card-footer > .card-footer-item')
        .click()
        cy.get('#fruits').select('Apple');
        cy.get('.subtitle').should('have.text','You have selected Apple')
    })

    
})