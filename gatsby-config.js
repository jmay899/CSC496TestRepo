module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
	"gatsby-plugin-sharp",
	{
		resolve: "gatsby-source-filesystem",
		options: {
			name: `blog`,
			path: `${__dirname}/blog`,
		}
    },
	{
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://csc496wordpress.tldr.dev/graphql`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false
      }
    },
	`gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ]
}