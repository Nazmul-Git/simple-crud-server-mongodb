const express= require('express');
const cors= require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app=express();
const port=process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

// database username & pass . This are not to write here
// username: nazmulhasan16021998
// password: lpF9ffvp0Ugm7xoP


const uri = "mongodb+srv://nazmulhasan16021998:lpF9ffvp0Ugm7xoP@cluster0.aayrgg2.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async ()=>{
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.post('/users', async (req, res)=>{
        const user= req.body;
        console.log('new user',user);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);


app.get('/', (req, res)=>{
    res.send('SIMPLE CRUD IS RUNNING.');
})

app.listen(port,()=>{
    console.log(`CRUD IS RUNNING ON PORT ${port}`)
})
