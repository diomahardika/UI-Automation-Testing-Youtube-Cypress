import { youtubeLocators } from "../locators/youtubeLocators";

const gamingPage = {
  videoTrending() {
    cy.xpath(youtubeLocators.trendingVideo).should("be.visible");
    cy.xpath(youtubeLocators.videoTitle).invoke("text").as("expectedTitleVideo");
    cy.get("@expectedTitleVideo").should("not.be.empty");
    cy.xpath(youtubeLocators.channelName).invoke("text").as("expectedChannelName");
    cy.get("@expectedChannelName").should("not.be.empty");

    cy.xpath(youtubeLocators.thumbnail).click()
  },
};
export default gamingPage;
