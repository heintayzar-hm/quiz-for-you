import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CertificateGenerator from "../../components/CertificatesGenerator/CertificatesGenerator";

const ResultPage = () => {
    const results = useSelector((state: RootState) => state.results);
    const navigate = useNavigate();
    const { total,score, finished } = results;
    useEffect(() => {
        if (!finished) {
            navigate(ROUTES.HOME);
        }
    })

    return (
        <CertificateGenerator>
            <div>
            <Link to={ROUTES.QUIZ}>Retake</Link>
            <h1>Results Page</h1>
            <p>Total: {total}</p>
            <p>Score: {score}</p>
        </div>
        </CertificateGenerator>
    )
}

export default ResultPage;
