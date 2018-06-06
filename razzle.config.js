var path = require('path');
module.exports = {
	modify: (config, {
		target,
		dev
	}, webpack) => {
		// do something to config

		/*
		config.module.rules.push({
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		});
		*/

		console.log('ASD')

		config.resolve.alias.plugins= path.join(__dirname, 'src/plugins');

		return config;
	},
};