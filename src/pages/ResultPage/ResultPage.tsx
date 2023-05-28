import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
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
    const success = percentage > 40;
    const background = success ? "bg-4" : "bg-5";
    return (

            <div className={`h-screen w-full grid grid-cols-1 md:grid-cols-[30%_70%] ${background}`}>
            <div className="bg-tertiary text-black">
                <div className="px-4 py-10">
                    {
                        success ?
                            <div className="flex gap-5 flex-col">
                                <TextWriter text="Congratulations!You have successfully completed the quiz and saved the world from the evil forces."></TextWriter>
                                <ElementAnimation> <Button onClick={() => setShowCertificate(true)} text="Get Your Certificate"/></ElementAnimation>
                                <Button onClick={() => navigate(ROUTES.HOME)} text="Retake"/>
                            </div>
                            :
                            <div className="flex gap-5 flex-col">
                                <TextWriter text="Sorry! You have failed to save the world!! Don't worry gods are merciful and give you a second chance."></TextWriter>
                                <ElementAnimation> <Button onClick={() => navigate(ROUTES.HOME)} text="Retake"/></ElementAnimation>
                            </div>
                    }
                </div>
            </div>
            {
                success && showCertificate ?
                    <ElementAnimation>
                        <CertificateGenerator name={name} />
                    </ElementAnimation>
                    :
                    <></>
                    }
        </div>
    )
}

export default ResultPage;
