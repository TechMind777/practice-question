const numCPUs = require('os').cpus().length;
const cluster = require('cluster');
const http = require('http');

if(cluster.isMaster){
    console.log(`Cluster is Master with id = ${process.pid}`)
    for(let i = 0; i < numCPUs; i++){
        cluster.fork();
    }
    cluster.fork();
    cluster.fork();
    cluster.fork();

}
else{
    http.createServer((req, res) => {
        const msg = `worker: ${process.pid}`;
        console.log(msg);
        res.end(msg)
    }).listen(3000)
    console.log(`Cluster is worker with id = ${process.pid}`)
}
