const Shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#dedede" offset="0%" />
      <stop stop-color="#e8e8e8" offset="50%" />
      <stop stop-color="#dedede" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#dedede" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export default Shimmer;
