import { youtubeLocators } from "../locators/youtubeLocators";

const videoPage = {
  verifyVideoTrending() {
    cy.xpath(youtubeLocators.detailPage.buttonPlay)
      .should("be.visible")
      .click();

    cy.xpath(youtubeLocators.detailPage.videoTitle)
      .should("be.visible")
      .then(function () {
        const expectedTitle = this.expectedTitleVideo;
        const expectedChannel = this.expectedChannelName;

        cy.xpath(youtubeLocators.detailPage.videoTitle).should(
          "contain.text",
          expectedTitle
        );

        cy.xpath(youtubeLocators.detailPage.channelName).should(
          "contain.text",
          expectedChannel
        );
      });
    cy.url().should("include", "/watch");
  },
};
export default videoPage;
