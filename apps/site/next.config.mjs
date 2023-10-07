
/** @type {import('next').NextConfig} */
const nextConfiguration = {
  transpilePackages: ['@conexa/environment'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfiguration
