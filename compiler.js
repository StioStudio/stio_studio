
let stio = {
    
    files: [],

    async upload(_file) {
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
    },

}

export { Install_Compiler }
