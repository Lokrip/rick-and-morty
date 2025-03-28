export const correctUrl = (primaryUrl: string, path: string) => {
    const trimmedUrlHost = primaryUrl.endsWith('/') ? primaryUrl.slice(0, -1) : primaryUrl;
    const trimmedUrlData = path.startsWith('/') ? path.slice(1) : path;
    return `${trimmedUrlHost}/${trimmedUrlData}`
}