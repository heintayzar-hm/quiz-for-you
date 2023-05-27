import Button from "../Button/Button"
import ElementAnimation from "../ElementAnimation/ElementAnimation"

export interface WelcomeComponentProps {
    handleComponent: () => void,
}

const WelcomeComponent = ({handleComponent}: WelcomeComponentProps) => {

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <ElementAnimation>
                <div className="flex gap-10 flex-col items-center justify-center text-center " id="component-1">
                    <span className="text-sm text-tertiary">Welcome</span>
                <h1 className="text-4xl font-bold font-primary">Let's go</h1>
                    <Button text="Start Your Quiz"
                        onClick={handleComponent}
                    ></Button>
               </div>
            </ElementAnimation>
        </div>
    )
}



export default WelcomeComponent
