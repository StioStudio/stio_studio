
let stio = {
    files: [],

    async download(_file) {
        let stio_file = fetch(_file)
            .then(Response => {
                return Response;
            }).then(Response => {
                return Response.text()
            })

        await stio_file.then(e => {
            stio.files.push(e)
        })
    },

}

export {stio}
