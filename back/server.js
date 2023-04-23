const express = require('express')
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')
const router = require('./routes/index')
const { port } = require("./config")
const app = express()

app.set('view engine', 'html')
nunjucks.configure('../views', { express: app })

app.use(express.static('../public'))
app.use(express.urlencoded({ extended : false }))
app.use(cookieParser())
app.use(router)

app.use((error, req, res, next) => {
    res.send(`
        <script type='text/javascript'>
            alert('${error.message}');
            history.back();
        </script>
    `)
})

app.listen(port, () => {
    console.log(`SERVER PORT:${port} start`)
})