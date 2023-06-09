// special page that is not affected by the app structure yet!
import { useNavigate } from "react-router-dom";
import { APP, COMPONENTS, ROUTES } from "../../constants";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CertificateGenerator from "../../components/CertificatesGenerator/CertificatesGenerator";
import Button from "../../components/Button/Button";
import TextWriter from "../../components/TextWriter/TextWriter";
import ElementAnimation from "../../components/ElementAnimation/ElementAnimation";

const ResultPage = () => {
    const results = useSelector((state: RootState) => state.results);
    const [showCertificate, setShowCertificate] = useState(false);
    const navigate = useNavigate();
    const { total,score, finished, name } = results;
    useEffect(() => {
        if (!finished) {
            navigate(ROUTES.HOME);
        }
    })
    const percentage = (score / total) * 100;
    const success = percentage >= APP.requiredMarksPercent;
    const background = success ? "bg-5" : "bg-5";
    return (

            <div className={`h-screen w-full grid grid-cols-1 md:grid-cols-[30%_70%] ${background}`}>
            <div className="bg-tertiary text-black">
                <div className="px-4 py-10">
                    {
                        success ?
                            <div className="flex gap-5 flex-col">
                                <TextWriter text={COMPONENTS.RESULTS.successText} delay={1}></TextWriter>
                                <ElementAnimation>
                                    <div className="flex gap-5">
                                        <span><span>You got:  </span><span>{score}</span> / <span>{total}</span></span>
                                    </div>
                                </ElementAnimation>
                                <ElementAnimation> <Button onClick={() => setShowCertificate(true)} text={COMPONENTS.RESULTS.getYourCertificate} /></ElementAnimation>

                                <Button onClick={() => navigate(ROUTES.HOME)} text={COMPONENTS.RESULTS.retakeButton } />
                            </div>
                            :
                            <div className="flex gap-5 flex-col">
                                <TextWriter text={COMPONENTS.RESULTS.failText} delay={1}></TextWriter>
                                <ElementAnimation>
                                    <div className="flex gap-5 flex-col">
                                        <span><span>You got:  </span><span>{score}</span> / <span>{total}</span>  <span>({percentage} %)</span></span>
                                        <span>Minimum percent to pass:  <span>{APP.requiredMarksPercent}</span> % </span>
                                    </div>
                                </ElementAnimation>
                                <ElementAnimation> <Button onClick={() => navigate(ROUTES.HOME)} text={ COMPONENTS.RESULTS.retakeButton } /></ElementAnimation>
                            </div>
                    }
                </div>
            </div>
            {
                success && showCertificate ?
                    <ElementAnimation>
                        <CertificateGenerator name={name} text={COMPONENTS.RESULTS.downLoadText} />
                    </ElementAnimation>
                    :
                    <></>
            }
        </div>
    )
}

export default ResultPage;
