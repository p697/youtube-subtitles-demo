// 监听来自 background.js 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("来到 popup 了");
  if (request.subtitles) {
    console.log("处理 subtitles");
    // 给所有 </text> 后面加上换行符
    const subtitles = request.subtitles.replace(/<\/text>/g, "</text>\n");
    document.getElementById("subtitles").textContent = subtitles;
  }
});
