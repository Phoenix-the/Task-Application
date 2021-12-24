const express = require( 'express' )
require( './db/mongoose' )
const userRouter = require( './routers/user' )
const taskRouter = require( './routers/task' )
const User = require( './models/user' )


const app = express()
const port = process.env.Port || 3000;



app.use( express.json() )
app.use( userRouter )
app.use(taskRouter)

const main = async () =>
{
    const user = await User.findById( '61b3aa5a8ca25c1018897eb0' )
    // console.log( user.tasks )
}
main()

app.listen( port, () =>
{
    console.log( 'Server is up on port' + port );
} )
