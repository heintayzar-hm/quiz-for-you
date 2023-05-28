import { useState } from "react"
import TextWriter from "../TextWriter/TextWriter";
import ElementAnimation from "../ElementAnimation/ElementAnimation";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setUserName } from "../../redux/slices/results/resultSlice";

export interface NameComponentProps {
    handleComponent: () => void,
}

const NameComponent = ({ handleComponent }: NameComponentProps) => {
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState("");
    const showInputHandler = () => {
        setShowInput(!showInput);
    }

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const submitHandler = () => {
        dispatch(setUserName(name))
        handleComponent();
    }

    return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-10 bg-2">

            <TextWriter
                text="What's your name, Warrior?"
                className="text-4xl "
                OnComplete={showInputHandler}
            />
            {
                showInput ? (
                    <ElementAnimation>
                        <div className="flex gap-10">
                        <Input type="text" onChange={nameHandler} value={name}  />
                        <Button text="That's my Name"
                            onClick={submitHandler}
                        />
                        </div>
                    </ElementAnimation>
                ) : <input type="text" className="invisible"/>
            }
        </div>
    )
}

export default NameComponent
