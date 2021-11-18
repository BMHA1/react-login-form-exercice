

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
        console.log(email)
        console.log(password)
        try {
            let result = await fetch(`http://localhost:4000/usuario/login`, {
                method: "POST",
                body:{
                    mail: email,
                    password: password 
                }

                
            })
            return await result.json()

           // return result

        } catch (error) {
            
            console.log(error)
        }

    }
}