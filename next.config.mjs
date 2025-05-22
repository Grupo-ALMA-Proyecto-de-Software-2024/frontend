/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL || "http://backend:8000",
  },
  // CORS handling for backend connection
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_API_URL || "http://backend:8000"
        }/:path*`,
      },
    ];
  },
};

export default nextConfig;
