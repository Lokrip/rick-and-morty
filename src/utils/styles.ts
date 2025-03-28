export const correctClass = (primary: string, className: string) => {
    return className ? `${primary} ${className}` : primary
}
