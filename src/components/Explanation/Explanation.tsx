import Button from "../Button/Button"

export interface ExplanationProps {
    handleComponent: () => void,
}

const Explanation = ({handleComponent}:ExplanationProps) => {
    return (
        <div>
            Component
            <Button onClick={handleComponent} text="Start Your Quiz"/>
        </div>
    )
}

export default Explanation;
