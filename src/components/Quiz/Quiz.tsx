import PropTypes from 'prop-types'
import { Choice } from '../../types'
import Button from '../Button/Button'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Option from '../Option/Option';
import Timer from '../Timer/Timer';
import { useDispatch } from 'react-redux';
import { increaseScore } from '../../redux/slices/results/resultSlice';
import { AppDispatch } from '../../redux/store';

export interface QuizProps {
    question: string,
    options: Choice[],
    answer: string,
    id: string,
    nextQuestion: (id:string) => void,
}
const Quiz = ({ question, options, answer,nextQuestion, id }: QuizProps) => {
    const uniqueId = uuidv4();
    const [showAnswer, setShowAnswer] = useState(false);
    const [stop, setStop] = useState(false);
    const dispatch = useDispatch<AppDispatch>()
    const [selectedOption, setSelectedOption] = useState({
        id: '',
        value: ''
    } as Choice);

    const handleAnswer = () => {
        setShowAnswer(!showAnswer);
        setStop(!stop);
        if (selectedOption.id === answer) {
            dispatch(increaseScore())
        }
    }

    const handleSelectedOption = (option: Choice) => {
        setSelectedOption(option);
    }

    const handleQuestion = () => {
        nextQuestion(id);
    }

    return (
        <div id={`${id}`}>
            <h3>{question}</h3>
            <Timer handleAnswer={handleAnswer} stopProps={ stop} />
            <ul>
                {
                    options.map((option) => {
                        return (
                            <li key={option.id}>
                                <Option
                                    option={option}
                                    uniqueId={uniqueId}
                                    handleSelectedOption={handleSelectedOption}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            {
                showAnswer ?
                <Button type='button' onClick={handleQuestion}>Next</Button>
                :
                <Button type='submit' onClick={handleAnswer}>Submit</Button>

            }
            {
                showAnswer && <p>{answer}</p>
            }
        </div>
    )
}

Quiz.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    nextQuestion: PropTypes.func.isRequired,
}


export default Quiz
