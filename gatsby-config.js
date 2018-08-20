module.exports = {
  siteMetadata: {
    title: 'Dreaming of Thailand',
    description: 'Travels in the Land of Smiles',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'zb35oeiq0t93',
        accessToken: '55f84a536f0ce3e8c560aafeb0a5b0b73f7f68c6d93531b757b0ef0c7f701b39',
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark'
  ]
};

// pathPrefix: '/dreaming-of-thailand-blog',
