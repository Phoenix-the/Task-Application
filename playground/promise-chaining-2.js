require( '../src/db/mongoose' )
const Task = require( '../src/models/task' )

// Task.findByIdAndRemove( '619eb26f60b35467d05a906b').then( ( task ) =>
// {
//     console.log( task )
//     return Task.countDocuments({completed: false})
// } ).then( ( result ) =>
// {
//     console.log(result)
// } ).catch( ( e ) =>
// {
//     console.log( e );
// })

const deleteTaskAndCount = async ( id )=>{
    
    const task = await Task.findByIdAndDelete( id );
    const count = await Task.countDocuments( { completed: false } );
    return count;
}

deleteTaskAndCount('619eb2373abfaf5984a14b03').then( ( count ) =>
{
    console.log( count );
} ).catch( ( e ) =>
{
    console.log( e );
})