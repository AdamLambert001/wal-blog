/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/your-repo-name', // if deploying to github.com/user/your-repo-name
    trailingSlash: true, // recommended for static exports
  };

export default nextConfig;
