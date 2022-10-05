import { useEffect } from "react"

export const RecoveryPassword = () => {

    useEffect(() => {
        if (window !== undefined) {
            try {
                window.location.replace("myapp://recuperar-senha")
            } catch (error) {
                console.error(error)
            }
        }
    }, [])

    return (
        <h1>Recuperar senha</h1>
    )
}