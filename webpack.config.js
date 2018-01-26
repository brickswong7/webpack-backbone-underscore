module.exports = {
	entry:"./index.js",
	output:{
		path:_dirname+'/build',
		filename:"bundle-[hash].js"
	},
	devtool:'eval-source-map',
	devServer:{
		contentBase:"./build“,
		historyApiFallback:true,
		inline:true
	}
}
