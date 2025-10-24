export const youtubeLocators = {
  renderPage: '//div[@id="primary"]',
  gamePage: '//a[@href="/gaming"]',
  trendingVideo: '//ytd-item-section-renderer//span[@id="title" and contains(text(), "Trending videos")]',
  videoTitle: '(//ytd-item-section-renderer[contains(.,"Trending videos")]//div[@id="items"]/descendant::ytd-grid-video-renderer)[3]/descendant::a[contains(@id, "video-title")]',
  channelName: '(//ytd-item-section-renderer[contains(.,"Trending videos")]//div[@id="items"]/descendant::ytd-grid-video-renderer)[3]/descendant::a[contains(@class, "yt-simple-endpoint style-scope yt-formatted-string")]',
  thumbnail: '(//ytd-item-section-renderer[contains(.,"Trending videos")]//div[@id="items"]/descendant::ytd-grid-video-renderer)[3]/descendant::a[@id="thumbnail"]',
  detailPage: {
    buttonPlay:'//button[@class="ytp-play-button ytp-button"]',
    videoTitle: '//div[@id="title"]//yt-formatted-string[contains(@class, "ytd-watch-metadata")]',
    channelName: '//div[@id="upload-info"]//ytd-channel-name[@id="channel-name"]//yt-formatted-string[contains(@id, text)]'
  }

}