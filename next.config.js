/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    swcMinify: true,
    optimizeFonts: true,
    images: {
        loader: 'imgix',
        path: '/assets',
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
