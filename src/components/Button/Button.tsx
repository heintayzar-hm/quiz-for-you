import { gsap } from "gsap";
import { useRef } from "react";
import { APP } from "../../constants";
import { v4 } from "uuid";
export type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    testid?: string;
}

const Button = ({ text,testid, ...props }: ButtonProps) => {
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current.children, {
          transform: `translate(0px,${APP.animation.y} )`,
            duration: 0.3,
            opacity: 0,
            stagger: 0.05,
          onComplete: () => {
            // Animation completed logic
            if (!buttonRef.current) return;
              gsap.fromTo(buttonRef.current.children, {
                  transform: "translate(0px, 10px)",
                  opacity: 0,
              }, {
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  duration: 0.2,
                    stagger: 0.05,
              });
          },
        });
      };


    const { className } = props;
    return <button {...props}
        onMouseEnter={handleMouseEnter}
        className={`${className} relative inline-flex justify-center items-center rounded-full font--item button js-button js-cursor-hover px-7 py-2 -sm:px-7 bg-transparent border border-secondary js-artwork-back pointer-events-none opacity-0 js-loader-button`}
        style={{ transform: "translate(0px, 0px)", pointerEvents: "auto", opacity: "1.25" }}
        data-testid={(testid) ? testid : "button"}
    >
        <span className="relative z-10 js-button-text">
            <div style={{display: "block", textAlign: "center", position: "relative"}} >
                <div style={{ display: "block", position: "relative", zIndex: 10, textAlign: "center" }} ref={buttonRef}>
                    {
                        text.split("").map((letter, index) => {
                            if (letter === " ") {
                                return (
                           <span className="" key={index}> </span>
                                )
                               }
                            return (

                                    <div
                                        key={v4()}
                                    style={{ display: "inline-block", position: "relative", zIndex: 10 }}
                                >{letter}</div>

                            )
                        })
                    }
                </div>
            </div>
        </span>
    </button>;
    };


export default Button;
