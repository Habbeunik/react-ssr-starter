const withPlugins = require('next-compose-plugins');

const sass = require('@zeit/next-sass');
const images = require('next-images');

module.exports = withPlugins(
	[
		[
			sass,
			{
				cssModules: true
			}
		],
		[images]
	],
	{
		webpack: (config) => {
			config.module.rules.push({
				test: /\.(eot|ttf|woff|woff2)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			});

			return config;
		}
	}
);
