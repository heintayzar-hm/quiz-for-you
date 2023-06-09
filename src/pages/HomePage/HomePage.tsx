import { useState } from "react"
import NameComponent from "../../components/NameComponent/NameComponent";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Explanation from "../../components/Explanation/Explanation";
import { COMPONENTS, ROUTES } from "../../constants";
import { textToSpeech } from "../../helper";
const components = ["component-1", "component-2"]

const HomePage = () => {
    const [component, setComponent] = useState(components[0]);
    const name = useSelector((state:RootState) => state.results.name);
    const navigate = useNavigate();


    const handleComponent = () => {
        const index = components.findIndex((comp) => comp === component);
        // additional voice speech
        const onStart = () =>  {
            setComponent(components[index+1])
        }
        if (index + 1 === 1 && !name) {
            textToSpeech(
                COMPONENTS.NameComponent.title,
                onStart
            )
        } else {
             onStart();
        }
    }
    let renderComponent;


    if (component === components[0]) {

           renderComponent= <WelcomeComponent
                handleComponent={handleComponent}
            />

    } else if (component === components[1] && !name) {

            renderComponent=  <NameComponent
                handleComponent={handleComponent}
            />
    } else {
        renderComponent = <Explanation
            changePage={() => navigate(ROUTES.QUIZ)}
        />
    }

    return (
        <>
            <div className="h-screen w-full flex items-center justify-center">
            {
                renderComponent
            }
            </div>
        </>
    )
}

export default HomePage
