import * as express from 'express';
const app = express();
const routes = express.Router();

routes.get('/', function(req,res) {
    res.send("hello World");
})

app.listen(console.log("listening"));

export default routes;