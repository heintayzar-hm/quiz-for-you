import { Link } from "react-router-dom"
import { ROUTES } from "../../constants"

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to={ROUTES.QUIZ}>Go to protected</Link>
        </div>
    )
}

export default HomePage
