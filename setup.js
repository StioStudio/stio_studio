import { Install_Compiler } from "./compiler.js"
await eval(Install_Compiler("./compiler.js"))

await stio.upload("./code.stio")

let out = stio.files[0].split("\r\n");

for (var i = 0; i < out.length; i++) {
    if (!out[i].startsWith("//"))
        console.log(out[i]);
    else
        continue
}


