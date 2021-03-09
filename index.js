const app = require('express')()

app.get('/', (_, res) => {
	res.end('hello from Root Server API...')
})

app.listen(4000, () => console.log('server is running on port 4000.'))
