import { COMPONENTS } from "../../constants"
import Button from "../Button/Button"
import ElementAnimation from "../ElementAnimation/ElementAnimation"

export interface WelcomeComponentProps {
    handleComponent: () => void,
}

const WelcomeComponent = ({handleComponent}: WelcomeComponentProps) => {

    return (
        <div className="h-screen w-full flex items-center justify-center bg-1">
            <ElementAnimation>
                <div className="flex gap-10 flex-col items-center justify-center text-center " id={COMPONENTS.WelcomeComponent.id}>
                    <span className="text-sm text-tertiary font-tertiary">{ COMPONENTS.WelcomeComponent.title }</span>
                    <h1 className="md:text-4xl text-xl font-bold font-tertiary">{ COMPONENTS.WelcomeComponent.description }</h1>
                    <Button text={COMPONENTS.WelcomeComponent.button}
                        onClick={handleComponent}
                    ></Button>
               </div>
            </ElementAnimation>
        </div>
    )
}



export default WelcomeComponent
