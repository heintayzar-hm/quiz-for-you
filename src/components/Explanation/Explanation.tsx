import Button from "../Button/Button"
import TextWriter from "../TextWriter/TextWriter";

export interface ExplanationProps {
    changePage: () => void,
}
const text= "In a world plagued by demons, your mission is to save humanity by answering a series of questions. Time is of the essence, as you'll have 30 seconds to respond to each question. If you excel in the quiz, you will be rewarded with a powerful shield that can protect the world from further harm."
const Explanation = ({changePage}:ExplanationProps) => {
    return (
        <div className="flex flex-col items-center justify-center bg-2 h-screen text-2xl text-white">
                <TextWriter text={text} className="text-center px-[5%] py-[3%] font-primary"/>
            <Button onClick={changePage} text="Start Your Quiz"
            />
        </div>
    )
}

export default Explanation;
