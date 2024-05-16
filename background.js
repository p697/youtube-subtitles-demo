chrome.webRequest.onCompleted.addListener(
  function (details) {
    if (
      details.url?.includes("timedtext") &&
      !details.url.includes("fmt=json") &&
      !details.url.includes("hahaha=lalala")
    ) {
      console.log("一个请求:", details.url);
      // 获取字幕
      fetch(details.url + "&hahaha=lalala")
        .then((response) => response.text())
        .then((data) => {
          console.log("Subtitles:", data);
          // 发送消息到 popup.js
          chrome.runtime.sendMessage({ subtitles: data });
        })
        .catch((error) => console.error("Error fetching subtitles:", error));
    }
  },
  { urls: ["https://www.youtube.com/*"] }, // 这里可以限定监听特定的URL模式
  ["responseHeaders"]
);
