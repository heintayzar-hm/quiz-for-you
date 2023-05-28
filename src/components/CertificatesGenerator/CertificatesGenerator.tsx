// Example using react-html2canvas
import html2canvas from "html2canvas";
import { useRef } from "react";
import Button from "../Button/Button";
import Template from "../../assets/templates/template.png"
import { APP } from "../../constants";
export interface CertificateGeneratorProps {
  name: string;
  text: string;
}
const CertificateGenerator = ({ name, text }: CertificateGeneratorProps) => {
    const certificateRef = useRef<HTMLDivElement>(null);
  const captureCertificate = () => {
      const certificateElement = certificateRef.current
      if(!certificateElement) return
    html2canvas(certificateElement).then((canvas) => {
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = APP.certifcateName;
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center px-[10%] py-5 gap-5">
      <div id="certificate" ref={certificateRef} className="relative text-black">
        {/* Certificate template with recipient name overlay */}
        <img src={Template} alt="Certificate Template" className=""/>
        <div className="absolute md:top-[50%] md:left-[40%] md:text-3xl text-lg left-[30%] top-[45%]  text-center">
          <div>{name}</div>
        </div>
      </div>
      <Button onClick={captureCertificate} text={text}></Button>
    </div>
  );
};

export default CertificateGenerator;
