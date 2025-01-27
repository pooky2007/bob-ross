let bobRossImages = [
  "https://styles.redditmedia.com/t5_bt15cy/styles/profileIcon_dlr8r1027b8d1.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=52fb17b33e9673e13617e6b0030c47411ae776fa",
  "https://bit.ly/3ozQCVk",
  "https://bit.ly/3omYDN6",
  "https://bit.ly/3osrfoi",
  "https://bit.ly/3qCPjax",
  "https://bit.ly/3CkRXE6",
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
  const index = Math.floor(Math.random() * bobRossImages.length);
  image.src = bobRossImages[0];
}
