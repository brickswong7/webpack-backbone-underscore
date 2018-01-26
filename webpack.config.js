module.exports = {
	entry:"./index.js",
	output:{
		path : __dirname +"/build",
		filename : "bundle.js"
	},
	devtool:'eval-source-map',
	devServer:{
		contentBase:"./build",
		historyApiFallback:true,
		inline:true,
		hot:true
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style!css?sourceMap!postcss"},
			{test:/\.less$/,loader:"style!css!less|postcss"},
			{test:/\.scss$/,loader:"style!css!sass|postcss"}
		]
	}

}
