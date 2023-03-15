const { redirect } = require('next/dist/server/api-utils')

const API_KEY = "10923b261ba94d897ac6b81148314a3f"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: `/old-blog/:path`,
      destination: `/new-blog/:path`,
      permanent:false
    },
    ]
  },
  async rewrites() {
    return [{
      source: `/api/movies`, 
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    }  
    ]
  }
}



module.exports = nextConfig
