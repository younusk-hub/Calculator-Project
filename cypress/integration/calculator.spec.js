// http://127.0.0.1:5503/index.html

// test, it

beforeEach(() => {
    cy.visit("/index.html");
})

describe("Should display the calculator", () => {

    it("shows the calculaor on the screen", () => {
        // arrange -> get things ready
        
        // act -> doing it 
        // assert -> seeing if it is what you want it to be
        // pass in a selector
        cy.get(".calculator-container").should("exist");
    });

    it("should show all 20 buttons", () => {
        cy.get("button").should("have.length", 20);
    });
});


// Do something -> simulate a user 

describe("Should perform addition", () => {

    it("Should calculate a single digit addition 7 + 8 = 15", () => {
        cy.get("button").contains("8").click();
        cy.get("[value='+']").click();  // this is by attribute -> value
        cy.get("button").contains("7").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", 15);
        
    });
}); 

describe("Should perform simple subtraction", () => {

    it("Should calculate a single digit subtraction, 5 - 2 = 3", () => {
        cy.get("button").contains("5").click();
        cy.get("[value='-']").click();  // this is by attribute -> value
        cy.get("button").contains("2").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", 3);
        
    });


}); 

describe("Should perform simple multiplication", () => {

    it("Should calculate a single digit multiplication, 6 X 3 = 18", () => {
        cy.get("button").contains("6").click();
        cy.get("[value='X']").click();  // this is by attribute -> value
        cy.get("button").contains("3").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", 18);
    });
}); 

describe("Should perform division", () => {

    it("Should calculate a single digit division, 9 ÷ 3 = 3", () => {;
        cy.get("button").contains("9").click();
        cy.get("[value='÷']").click();  // this is by attribute -> value
        cy.get("button").contains("3").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", 3);
    });
});


// NEGATIVE TEST CASES -> NOT GOING TO PLAN
// - PRESSING BUTTONS OUT ORDER
//  - OPERATOR AT THE START
// - PRESSING OPERATOR TWICE
// - MULTIPLE DECIMAL POINTS
// - DIVIDE BY 0?
// - BIG NUMBERS?

describe("Should delete any operators at the start of the expression, execpt subtraction.", () => {

    it("Should calculate division, ÷ 9 ÷ 3 = 3", () => {;
        cy.get("[value='÷']").click();
        cy.get("button").contains("9").click();
        cy.get("[value='÷']").click();  // this is by attribute -> value
        cy.get("button").contains("3").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", 3);
    });

    it("Should calculate multiplication, X 6 X 3 = 18", () => {
        cy.get("[value='X']").click();
        cy.get("button").contains("6").click();
        cy.get("[value='X']").click();  // this is by attribute -> value
        cy.get("button").contains("3").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", 18);
    });
});

describe("Should return NaN when user inputs 2 operators next to each other.", () => {

    it("Should calculate a single digit division, 9 ÷÷ 3 = NAN", () => {;
        
        cy.get("button").contains("9").click();
        cy.get("[value='÷']").click();
        cy.get("[value='÷']").click();  // this is by attribute -> value
        cy.get("button").contains("3").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", "NaN");
    });

    it("Should calculate a single digit multiplication, 6 XX 3 = NAN", () => {
        
        cy.get("button").contains("6").click();
        cy.get("[value='X']").click();
        cy.get("[value='X']").click();  // this is by attribute -> value
        cy.get("button").contains("3").click();
        cy.get("[value='=']").click();

        cy.get('.calculator-container__answer').should("have.text", "NaN");
    });
});