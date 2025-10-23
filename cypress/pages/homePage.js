import { youtubeLocators } from "../locators/youtubeLocators";

const homePage = {
  toGamePage() {
    cy.xpath(youtubeLocators.renderPage).should("be.visible")
    cy.xpath(youtubeLocators.gamePage).should("be.visible").click()
    cy.url().should("include", "/gaming");
  }
}
export default homePage;