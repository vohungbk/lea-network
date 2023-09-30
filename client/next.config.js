/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@/app/components/?(((\\w*)?/?)*)': {
      transform: '@/app/components/{{ matches.[1] }}/{{ member }}',
      skipDefaultConversion: true,
    },
    '@/utils/?(((\\w*)?/?)*)': {
      transform: '@/utils/{{ matches.[1] }}/{{ member }}',
      skipDefaultConversion: true,
    },
    '@/hooks/?(((\\w*)?/?)*)': {
      transform: '@/hooks/{{ matches.[1] }}/{{ member }}',
      skipDefaultConversion: true,
    },
    '@/actions/?(((\\w*)?/?)*)': {
      transform: '@/actions/{{ matches.[1] }}/{{ member }}',
      skipDefaultConversion: true,
    },
  },
}

module.exports = nextConfig
