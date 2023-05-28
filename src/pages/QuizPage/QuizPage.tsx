import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuizzes } from "../../redux/slices/quiz/thunk"
import { AppDispatch, RootState } from "../../redux/store"
import Quiz from "../../components/Quiz/Quiz"
import { Question } from "../../types"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants"
import { resetScore, setFinished, setTotalScore } from "../../redux/slices/results/resultSlice"
import { Choice } from "../../types"
const QuizPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const quizzes = useSelector((state: RootState) => state.quiz.questions)
    const [activeQuiz, setActiveQuiz] = useState(quizzes[0]);
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    useEffect(() => {
            dispatch(getQuizzes()).then((data) => {
                if (!data.payload) {
                    return;
                }
                dispatch(setTotalScore(data.payload.length))
                setActiveQuiz(data.payload[0] as Question)
            })

        dispatch(resetScore());
        }, [dispatch, quizzes.length])

    const handleNextQuestion = (id: string) => {
        const index = quizzes.findIndex((quiz) => quiz.id == id);
        if (index == quizzes.length - 1) {
            dispatch(setFinished(true));
            navigate(ROUTES.RESULTS);
            return;
        }
        setCount(count + 1);
        setActiveQuiz(quizzes[index + 1]);
    }

    return (
        <section>
            <main className="h-screen w-full justify-between px-[5%] items-center gap-3 grid grid-cols-1 md:grid-cols-[70%,30%]">
                <div>
                {
                        activeQuiz &&
                        <>
                            {
                                 quizzes.map((quiz) => {
                                     if (quiz.id == activeQuiz.id) {
                                        const correctAnswer = quiz.choices.find((choice) => choice.id === quiz.correct_answer) || {} as Choice;
                                        return (
                                            <Quiz
                                                key={quiz.id}
                                                id={quiz.id}
                                                question={quiz.question}
                                                options={quiz.choices}
                                                answer={correctAnswer.value}
                                                nextQuestion={(id) => handleNextQuestion(id)}
                                            />
                                        )
                                    }
                                 })
                            }
                        </>
                }
                </div>
                <div className="font-tertiary text-8xl">
                    <span>{count}</span> <span>/</span><span>{quizzes.length }</span>
                </div>

            </main>
        </section>
    )
}

export default QuizPage
