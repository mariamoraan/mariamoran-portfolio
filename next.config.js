/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
poweredByHeader: false,
swcMinify: true,
}
module.exports = nextTranslate({
reactStrictMode: true,
...nextConfig
})