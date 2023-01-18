
/*

Compiler code for stio_studio. DO NOT MODIFY!

-------------------------------------------------------------------------------

MIT License

Copyright (c) 2023 StioStudio and nikeedev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
 


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

    /*
     * Gives an array of each line
     */
    split_with_next_line(_file) {
        return files[0].split("\r\n");
    }
}

let options = {
    comments: {
        starts_with: [["//"], ["/*"], ["#"]],

        ends_with: [[";", `
`], ["*/"], [`
`]]

    }
}


let files = [];

/*
 *Gives you an string of the file you specified
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






