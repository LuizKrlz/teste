import { useEffect } from "react"

export const RecoveryPassword = () => {

    useEffect(() => {
        if (window !== undefined) {
            try {
                window.location.replace("apolloturbo://redefinir-senha/senha?id=1u23y2187328173y21873y218&confirm_token=1623572163hagdfjaytsd7136126357")
            } catch (error) {
                console.error(error)
            }
        }
    }, [])

    return (
        <h1>Recuperar senha</h1>
    )
}