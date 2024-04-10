/// <reference types="cypress" />

describe("Check the gameplay", () => {
    // Visit gameplay before each test
    beforeEach(() => {
        cy.visit("/");
        cy.wait(6000);
        cy.getCypress("loading-enter-button").click();
    });

    // Check for contents & gameplay
    it("Check for contents & gameplay", () => {
        // Mario image
        cy.getCypress("title-mario-logo").should("exist");
        cy.getCypress("title-mario-logo").should("be.visible");
        
        // Title
        cy.getCypress("title-mario-jump").should("exist");
        cy.getCypress("title-mario-jump").should("be.visible");
        cy.getCypress("title-mario-jump").should("contain.text", "Mario Jump");

        // Check for the footer div
        cy.getCypress("footer-copyright-div").should("exist");
        cy.getCypress("footer-copyright-div").should("be.visible");
        cy.getCypress("footer-copyright-div").should("contain.text", "Copyright ©");
  
        // Check for the footer link
        cy.getCypress("footer-copyright-link").should("exist");
        cy.getCypress("footer-copyright-link").should("be.visible");
        cy.getCypress("footer-copyright-link").should("contain.text", "Kunal Ukey");
        cy.getCypress("footer-copyright-link").should("have.attr", "href", "https://github.com/helloukey");

        // Check for score text
        cy.getCypress("last-score-text").should("exist");
        cy.getCypress("last-score-text").should("be.visible");
        cy.getCypress("last-score-text").should("contain.text", "Score: 0");

        // Sun image
        cy.getCypress("sun").should("exist");
        cy.getCypress("sun").should("be.visible");

        // Clouds image
        cy.getCypress("clouds").should("exist");
        cy.getCypress("clouds").should("be.visible");

        // Birds image
        cy.getCypress("birds").should("exist");
        cy.getCypress("birds").should("be.visible");

        // Check for key message text
        cy.getCypress("press-title").should("exist");
        cy.getCypress("press-title").should("be.visible");
        cy.getCypress("press-title").should("contain.text", "ENTER KEY - START GAME");
        cy.getCypress("press-subtitle").should("exist");
        cy.getCypress("press-subtitle").should("be.visible");
        cy.getCypress("press-subtitle").should("contain.text", "SPACE KEY - JUMP!");

        // Mario running
        cy.getCypress("mario-running").should("exist");
        cy.getCypress("mario-running").should("be.visible");

        // Goombla
        cy.getCypress("goombla").should("exist");
        cy.getCypress("goombla").should("not.be.visible");

        // Koopa
        cy.getCypress("koopa").should("exist");
        cy.getCypress("koopa").should("not.be.visible");

        // Brick
        cy.getCypress("brick").should("exist");
        cy.getCypress("brick").should("be.visible");

        // Start button
        cy.getCypress("start-button").should("exist");
        cy.getCypress("start-button").should("be.visible");
        cy.getCypress("start-button").should("contain.text", "START");
        cy.getCypress("start-button").click();

        // Jump button
        cy.getCypress("jump-button").should("exist");
        cy.getCypress("jump-button").should("be.visible");
        cy.getCypress("jump-button").should("contain.text", "JUMP");

        // Game over button
        cy.wait(2000);
        cy.getCypress("game-over-button").should("exist");
        cy.getCypress("game-over-button").should("be.visible");
        cy.getCypress("game-over-button").should("contain.text", "GAME OVER");

        // Start button
        cy.wait(3000);
        cy.getCypress("start-button").should("contain.text", "START");

        // Score is not 0
        cy.getCypress("last-score-text").should("not.contain.text", "Score: 0");

    })
  })
  