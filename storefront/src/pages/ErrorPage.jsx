import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page flex justify-center align-center p-6">
            <section className="w-600 m-auto bg-orange-500 p-6">
                <h1>WifoStore</h1>

                <p className="text-center">Sorry, an unexpected error has occurred.</p>
                <p className="text-center text-2xl mt-6">
                    {console.log(error)}
                    <i>{error.statusText || error.message}</i>
                </p>
            </section>
        </div>
    );
}