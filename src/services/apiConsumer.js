

export const APIConsumer = {
    getMovies: async (text) => {
        const result = await fetch(`http://apimobiedb.com/movies?search=${text}`, {
            method: "GET"
        })
        return result
    },
    saveMovie: async (movie) => {
        const result = await fetch(`http://apimobiedb.com/movies`, {
            method: "POST",
            body: {
                movie
            }
        })
        return result
    },

    loginUser: async (email, password) => {
        try {
            const result = await fetch(`http://localhost:4000/usuario/login`, {
                method: "POST",
                body: {
                    "email": email,
                    "contrasenia": password
                }
            })
            return await result.json()

        } catch (e) {
            console.log(e)
        }

    }
}