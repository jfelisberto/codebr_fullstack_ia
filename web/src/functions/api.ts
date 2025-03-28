const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function httGet(url: string) {
    console.log(sanitizeUrl(`${baseURL}/${url}`))
    const response = await fetch(sanitizeUrl(`${baseURL}${url}`))
    return response.json()
}

function sanitizeUrl(url: string) {
    const protocol = url.split("://")[0]
    const base_url = url.split("://")[1]
    return `${protocol}://${base_url.replaceAll(/\/{2,}/g, "/")}`
}
