interface IMailConfig {
	driver: 'ethereal' | 'ses',
	defaults: {
		from: {
			email: string,
			name: string
		}
	}
}

export default {
	driver: process.env.MAIL_DRIVER || 'ethereal',

	defaults: {
		from: {
			email: 'dev@vitor-martins.com',
			name: 'Vitor Martins'
		}
	}
} as IMailConfig
