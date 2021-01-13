export const fetchData = (url, options = {}) => {
    const {
        startCallback = () => console.log(`[${url}] Start fetching`),
        catchCallback = (error) => console.error('Failed to fetch data', error),
        successCallback = (data) => console.log(`[${url}] Fetched`, data),
        endCallback = () => console.log(`[${url}] Stop fetching`),
        responseTransformFunction = 'json',
        ...fetchOptions
    } = options

    startCallback()
    return fetch(url, fetchOptions)
        .then((response) => {
            if (response.status < 200 || response.status > 299) {
                throw new Error(response.status)
            }
            return response
        })
        .then((response) => response[responseTransformFunction]())
        .then(successCallback)
        .catch(catchCallback)
        .finally(endCallback)
}

export default fetchData