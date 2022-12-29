exports.getIndexPage = (req, res) => {
    const { token } = req.cookies
    res.render('index.html', {token})
}