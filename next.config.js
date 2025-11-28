/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  async headers() {
    return [
      {
        source: "/assets/models/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "model/gltf-binary",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
