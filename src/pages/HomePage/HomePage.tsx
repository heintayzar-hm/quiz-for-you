import { useState } from "react"
import NameComponent from "../../components/NameComponent/NameComponent";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const components = ["component-1", "component-2"]

const HomePage = () => {
    const [component, setComponent] = useState(components[0]);
    const name = useSelector((state:RootState) => state.results.name);
    const navigate = useNavigate();
    const handleComponent = () => {
        if (name !== "") {
            navigate("/quiz")
        }
        const index = components.findIndex((comp) => comp === component);
        setComponent(components[index + 1]);
    }
    let renderComponent;

    if (component === components[0]) {
        return (
            <WelcomeComponent
                handleComponent={handleComponent}
            />
        )
    } else if (component === components[1]) {
        return (
            <NameComponent
                handleComponent={handleComponent}
            />
        )
    }


    return (
        <div className="h-screen w-full flex items-center justify-center">
            {
                renderComponent
            }
        </div>
    )
}

export default HomePage
