const isProd = process.env.NODE_ENV === 'production'


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ""
    },
    basePath: '',
    assetPrefix: ''
};

module.exports = nextConfig;