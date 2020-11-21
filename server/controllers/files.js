export const addFile = (request, response) => {
    try {
        if (!request.file) {
            return response.json({ error: 'All fields required' })
        }

    } catch (error) {
        console.log(error)
    }
}