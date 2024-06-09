const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		main: ['./src/js/ClientApp.jsx']
	},
	devtool: 'eval-cheap-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		devMiddleware: {
			publicPath: '/public/',
		},
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.sass?$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
					],
				include: path.join(__dirname, 'src', 'styles')
			},
			{
				test: /\.png$$/,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader'
			}
		]
	}
};
