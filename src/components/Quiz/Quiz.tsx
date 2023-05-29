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
import TextWriter from '../TextWriter/TextWriter';
import { answerFormat, guardQuestion } from '../../helper';
import { COMPONENTS } from '../../constants';

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
    const [answerText, setAnswerText] = useState('');
    const dispatch = useDispatch<AppDispatch>()
    const [selectedOption, setSelectedOption] = useState({
        id: '',
        value: ''
    } as Choice);

    const handleAnswer = () => {
        // guard for skip or not!!
        guardQuestion(selectedOption.value)
        handleTimer()
        if (selectedOption.value === answer) {
            dispatch(increaseScore())
        }
        if (!stop) {
            setAnswerText(selectedOption.value)
        }
    }

    const handleTimer = () => {
        setShowAnswer(!showAnswer);
        setStop(!stop);
    }

    const handleSelectedOption = (option: Choice) => {
        setSelectedOption(option);
    }

    const handleQuestion = () => {
        nextQuestion(id);
    }
    return (
        <div id={`${id}`} className='flex gap-5 flex-col'>
            <h3>{question}</h3>
            <Timer handleAnswer={handleTimer} stopProps={ stop} />
            <ul>
                {
                    options.map((option) => {
                        return (
                            <li key={option.id}>
                                <Option
                                    option={option}
                                    uniqueId={uniqueId}
                                    handleSelectedOption={handleSelectedOption}
                                    disabled={showAnswer}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            {
                showAnswer ?
                    <Button type='button' onClick={handleQuestion} text={ COMPONENTS.Quiz.button2} />
                :
                    <Button type='submit' onClick={handleAnswer} text={COMPONENTS.Quiz.button1} />

            }
            {
                showAnswer ?
                    <TextWriter text={answerFormat({
                        answer,
                        selected: answerText
                    }, answer === answerText)}
                        className='text-center break-words'
                    /> :
                    <p className='invisible'>{answerFormat({answer: '', selected: ''},false)}</p>

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
