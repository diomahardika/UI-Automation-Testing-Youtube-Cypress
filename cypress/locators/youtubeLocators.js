export const youtubeLocators = {
  renderPage: '//div[@id="primary"]',
  gamePage: '//a[@href="/gaming"]',
  videoTrendingPage: '//yt-button-shape//child::a[@href="/gaming/trending"]',
  trendingVideo: '(//div[@id="items" and @class="style-scope ytd-grid-renderer"]//child::ytd-grid-video-renderer)[3]',
  videoTitle: '(//a[@id="video-title"])[3]',
  channelName: '(//a[@class="yt-simple-endpoint style-scope yt-formatted-string"])[3]',
  thumbnail: '(//div[@id="items" and @class="style-scope ytd-grid-renderer"]//child::ytd-grid-video-renderer)[3]//child::a[contains(@tabindex, "-1")]',
  detailPage: {
    buttonPlay:'//button[@class="ytp-play-button ytp-button"]',
    videoTitle: '//div[@id="title"]//yt-formatted-string[contains(@class, "ytd-watch-metadata")]',
    channelName: '//div[@id="upload-info"]//ytd-channel-name[@id="channel-name"]//yt-formatted-string[contains(@id, text)]'
  }

}