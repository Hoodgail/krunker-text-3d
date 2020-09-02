const app = require("express")()
app.use(require("express").static("public"))
app.listen(2005,_=> require('node-notifier').notify('Server is running on port :2005'))