

try{
    process.loadEnvFile()
} catch(error){
    console.log(error)
}
const jsonServer = require('json-server');
const middlewares=jsonServer.defaults()

const server = jsonServer.create() 
const router=jsonServer.router("db.json")

server.use(middlewares)
server.use(router)
const PORT = process.env.PORT 

server.listen(PORT, () => {
  console.log(`JSON server is running at port ${PORT}`)
  console.log(`Local Access at http://localhost:${PORT}`)
})