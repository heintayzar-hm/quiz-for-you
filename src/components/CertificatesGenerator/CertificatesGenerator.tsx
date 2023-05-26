// Example using react-html2canvas
import html2canvas from "html2canvas";
import PropTypes from "prop-types";
import { useRef } from "react";

export interface CertificateGeneratorProps {
    children: React.ReactNode
}

const CertificateGenerator = ({ children }: CertificateGeneratorProps) => {
    const certificateRef = useRef<HTMLDivElement>(null);
  const captureCertificate = () => {
      const certificateElement = certificateRef.current
      if(!certificateElement) return
    html2canvas(certificateElement).then((canvas) => {
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "certificate.png";
      link.click();
    });
  };

  return (
    <div ref={certificateRef}>
      <h1>Certificate Generator</h1>
      <div id="certificate">
        {/* Certificate template with recipient name overlay */}
        <img src="/path/to/certificate-template.png" alt="Certificate Template" />
        <div>{children}</div>
      </div>
      <button onClick={captureCertificate}>Download Certificate</button>
    </div>
  );
};

CertificateGenerator.propTypes = {
    children: PropTypes.node.isRequired,
}
export default CertificateGenerator;
