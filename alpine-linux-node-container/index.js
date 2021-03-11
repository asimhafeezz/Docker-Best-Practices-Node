const app = require('express')()

app.get('/', (_, res) => {
	res.end('hello from Server BRO <3...')
})

app.listen(5500, () => console.log('running on port 5500.'))
