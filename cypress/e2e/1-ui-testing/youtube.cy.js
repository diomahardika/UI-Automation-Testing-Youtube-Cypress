import gamingPage from "../../pages/gamingPage";
import homePage from "../../pages/homePage";
import videoPage from "../../pages/videoPage";

describe("E2E find trending video youtube", () => {
  beforeEach(() => {
    // Kunjungi URL sebelum SETIAP tes untuk memastikan kondisi awal yang bersih.
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Should succes find trending gaming video", () => {
    homePage.toGamePage();
    gamingPage.videoTrending();
    videoPage.verifyVideoTrending();
  });
});
