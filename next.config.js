module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'petideal.s3.us-east-1.amazonaws.com',
				pathname: '/**',
			},
		],
	},
	experimental: {
		serverComponentsExternalPackages: [
			'@aws-sdk/client-s3',
			'@aws-sdk/s3-request-presigner',
		],
	},
}
