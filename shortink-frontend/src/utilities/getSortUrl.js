import { BACKEND_URL } from "../App"

const getSortUrl = (code) => {
    let newURl = ''
    if (BACKEND_URL.includes('http://')) {
        newURl = BACKEND_URL.replace('http://', '')
    }
    else if (BACKEND_URL.includes('https://')) {
        newURl = BACKEND_URL.replace('https://', '')
    }
    return `${newURl}/${code}`
}

export default getSortUrl;