
let stio = {
    files: [],

    async upload(_file) {
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
