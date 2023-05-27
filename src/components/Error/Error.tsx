import { APP } from "../../constants";
import Button from "../Button/Button";

const Error = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-primary text-white flex-col gap-3">
            <p className="text-2xl">Oops!</p> <br />
            <p>Something went wrong!!! Please try again later.</p>
            <p>Or you can reload the page.
                    <Button className="mx-3"  onClick={() => window.location.reload()} text="Reload"/>
            </p>
            <p>If this issue continues, please contact the email: <a href={`mailto:${APP.email}`} className="text-secondary hover:underline">{ APP.email}</a></p>
        </div>
    )
}

export default Error;
