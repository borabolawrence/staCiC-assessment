/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "random-data-api.com",
            },
            {
                protocol: "https",
                hostname: "robohash.org",
            }
        ]
    },
};

export default nextConfig;
