import { COMPONENTS } from "../../constants";
import Button from "../Button/Button"
import TextWriter from "../TextWriter/TextWriter";

export interface ExplanationProps {
    changePage: () => void,
}

const Explanation = ({changePage}:ExplanationProps) => {
    return (
        <div className="flex flex-col items-center justify-center bg-2 h-screen text-base sm:text-2xl text-white" id={COMPONENTS.Explanation.id}>
                <TextWriter text={COMPONENTS.Explanation.title} className="text-center px-[5%] py-[3%] font-primary"/>
            <Button onClick={changePage} text={COMPONENTS.Explanation.button}
            />
        </div>
    )
}

export default Explanation;
