/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    reactStrictMode: true,

    swcMinify: true,
    optimizeFonts: true,
    images: {
        loader: 'imgix',
        path: '',
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
        ],
        minimumCacheTTL: 15000000,
    },
};

module.exports = nextConfig;
