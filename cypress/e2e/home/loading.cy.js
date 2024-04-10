/// <reference types="cypress" />

describe("Check contents of the loading screen", () => {
  // Visit the landing page
  beforeEach(() => {
    cy.visit("/");
  })

  // Check for the mario image
  it("Check for the mario image", () => {
    cy.getCypress("loading-mario").should("exist");
    cy.getCypress("loading-mario").should("be.visible");
  });

    // Check for the loading text
    it("Check for the loading text", () => {
      cy.getCypress("loading-loading-text").should("exist");
      cy.getCypress("loading-loading-text").should("be.visible");
      cy.getCypress("loading-loading-text").should("contain.text", "Loading...");
    });

    // Check for the footer div
    it("Check for the footer div", () => {
      cy.getCypress("footer-copyright-div").should("exist");
      cy.getCypress("footer-copyright-div").should("be.visible");
      cy.getCypress("footer-copyright-div").should("contain.text", "Copyright ©");
    });

    // Check for the footer link
    it("Check for the footer link", () => {
      cy.getCypress("footer-copyright-link").should("exist");
      cy.getCypress("footer-copyright-link").should("be.visible");
      cy.getCypress("footer-copyright-link").should("contain.text", "Kunal Ukey");
      cy.getCypress("footer-copyright-link").should("have.attr", "href", "https://github.com/helloukey");
    });

    // Check for the enter button
    it("Check for the enter button", () => {
      cy.wait(6000);
      cy.getCypress("loading-enter-button").should("exist");
      cy.getCypress("loading-enter-button").should("be.visible");
      cy.getCypress("loading-enter-button").should("contain.text", "ENTER");
      cy.getCypress("loading-enter-button").click();
    });
})
