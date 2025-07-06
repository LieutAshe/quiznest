/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://your-domain.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: [
        '/admin/*',
        '/api/*'
    ],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/admin', '/api'] }
        ]
    }
};

export default config;