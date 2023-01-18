
/* compiler code. DO NOT USE!*/
let comp = {
    take_away_comments(_file) {
        let rem = 
`//helloworld
say("hello world") //hi
function say (msg) {
    console.log(msg)
}

`
        console.log(rem);
        
    },
    /**Gives an array of each line
     */
    split_with_next_line(_file) {
        return files[0].split("\r\n");
    }
}

let options = {
    cares_about_enter: true,
}

let files = [];

/**Gives you an string of the file you specified
 */
async function download(_file) {
    let stio_file = fetch(_file)
    .then(Response => {
        return Response;
    }).then(Response => {
        return Response.text()
    })
    
    let rem;
    await stio_file.then(e => {
        rem = e
    })
    return rem
}

/**Runs the code as an stio file
 */
function run(_file) {
    let rem;
    rem = comp.split_with_next_line(_file)
    for (let i = 0; i < rem.length; i++) {
        console.log(rem[i])
    }
    rem = comp.take_away_comments(_file)
}