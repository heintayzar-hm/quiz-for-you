import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuizzes } from "../../redux/slices/quiz/thunk"
import { AppDispatch, RootState } from "../../redux/store"

const QuizPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const quizzes = useSelector((state:RootState) => state.quiz)
    console.log(quizzes)
    useEffect(() => {
        dispatch(getQuizzes())
    },[])
    return (
        <section>
            <h1>Quiz Page</h1>
        </section>
    )
}

export default QuizPage
