import { useState } from "react"
import TextWriter from "../TextWriter/TextWriter";
import ElementAnimation from "../ElementAnimation/ElementAnimation";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setUserName } from "../../redux/slices/results/resultSlice";
import { COMPONENTS } from "../../constants";

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
        <div className="h-screen w-full flex items-center justify-center flex-col gap-10 bg-2" id={COMPONENTS.NameComponent.id}>

            <TextWriter
                text={COMPONENTS.NameComponent.title}
                className="sm:text-4xl text-xl"
                OnComplete={showInputHandler}
            />
            {
                showInput ? (
                    <ElementAnimation>
                        <div className="flex flex-col gap-10 sm:flex ">
                        <Input type="text" onChange={nameHandler} value={name}  />
                        <Button text={COMPONENTS.NameComponent.button}
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
