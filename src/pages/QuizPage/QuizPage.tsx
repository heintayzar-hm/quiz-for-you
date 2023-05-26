import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuizzes } from "../../redux/slices/quiz/thunk"
import { AppDispatch, RootState } from "../../redux/store"
import Quiz from "../../components/Quiz/Quiz"
import { Question } from "../../types"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants"
import { setTotalScore } from "../../redux/slices/results/resultSlice"

const QuizPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const quizzes = useSelector((state: RootState) => state.quiz.questions)
    const [activeQuiz, setActiveQuiz] = useState(quizzes[0]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getQuizzes()).then((data) => {
            if (!data.payload) {
                return;
            }
            setActiveQuiz(data.payload[0] as Question)
            dispatch(setTotalScore(data.payload.length))
        })
    }, [dispatch])

    const handleNextQuestion = (id: string) => {
        const index = quizzes.findIndex((quiz) => quiz.id == id);
        if (index == quizzes.length - 1) {
            navigate(ROUTES.RESULTS);
            return;
        }

        setActiveQuiz(quizzes[index + 1]);
    }

    return (
        <section>
            <h1>Quiz Page</h1>
            <main>
                {
                        activeQuiz &&
                        <>
                            {
                                 quizzes.map((quiz) => {
                                    if (quiz.id == activeQuiz.id) {
                                        return (
                                            <Quiz
                                                key={quiz.id}
                                                id={quiz.id}
                                                question={quiz.question}
                                                options={quiz.choices}
                                                answer={quiz.correct_answer}
                                                nextQuestion={(id) => handleNextQuestion(id)}
                                            />
                                        )
                                    }
                                 })
                            }
                        </>
                }
            </main>
        </section>
    )
}

export default QuizPage
