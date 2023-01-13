import {stio} from "./compiler.js"

await stio.download("./code.stio")

let out = stio.files[0].split("\r\n");

for (var i = 0; i < out.length; i++)
{
    console.log(out[i]);

}
