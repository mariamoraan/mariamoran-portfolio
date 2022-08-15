const nextTranslate = require('next-translate');

const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ["images.ctfassets.net", "cdn.esan.mn", "image.esan.mn", "cdn.elibrary.mn"],
  },
  
}

module.exports = nextTranslate({
  reactStrictMode: true,
  ...nextConfig
})