import {useRouteError} from "react-router-dom"

const ErrorPage = ()=>{
    const error = useRouteError()
    return (
        <div>
            <h1>This character is not available</h1>
            <b>{error.statusText || error.message}</b>
        </div>
    )
}

export default ErrorPage