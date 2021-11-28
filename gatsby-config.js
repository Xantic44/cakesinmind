module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "cakesinmind",
	},
	plugins: [
		{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: "ITLRHuWDCXV47HmWd_5sVGLVWoYUj2SEFMUs_HL1BUg",
				spaceId: "1kxxa3ywrtkd",
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};
