/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static-interactive-resmue.vercel.app',  // For About section image
        }
      ],
    },
  };
  
  export default nextConfig;
  