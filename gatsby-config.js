const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Siri Fuder Gifford`,
    description: `My portfolio`,
    author: `@Maghin`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Collections',
        link: '/collections'
      }
    ],
    socialLinks: [
      {
        name: 'fb',
        link: 'http://fb.com/sirifgifford'
      },
      {
        name: 'twitter',
        link: 'http://twitter.com/sirifudergifford'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/sirifudergifford/'
      },
      {
        name: 'pinterest',
        link: 'http://pinterest.com/sirifudergifford'
      },
      {
        name: 'gmail',
        link: 'mailto:sirifudergifford@hotmail.com'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        '@components': path.join(__dirname, 'src/components'),
        '@assets': path.join(__dirname, 'src/images')
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Siri's Creative Agency`,
        short_name: `Siri Fuder `,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FFA726`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
