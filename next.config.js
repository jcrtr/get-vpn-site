/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ""
    },
    basePath: "/get-vpn-site",
    assetPrefix: "/get-vpn-site"
};

module.exports = nextConfig;