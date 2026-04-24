/** @type {import('next').NextConfig} */
const basePath = "/julianmendonca";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Served under github.io/<repo-name>/ — remove basePath if the repo is ever
  // renamed to julianmendonca.github.io (then it serves from the root).
  basePath,
  // Exposed so client components can prefix their own asset URLs, since
  // next/image does not auto-prefix paths when images.unoptimized is true.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
