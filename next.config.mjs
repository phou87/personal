import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/old-path',
        destination:
          'https://docs.google.com/document/d/1S60C9pyElrVVN4VEtbeOI9aS9nKb-6I_FcphOOofIhw',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
