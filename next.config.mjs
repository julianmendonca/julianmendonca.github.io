/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Served under github.io/<repo-name>/ — remove this if the repo is ever
  // renamed to julianmendonca.github.io (then it serves from the root).
  basePath: "/julianmendonca",
};

export default nextConfig;
