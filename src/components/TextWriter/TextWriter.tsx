import { gsap } from 'gsap';
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { APP } from '../../constants';

export interface TextWriterProps {
    text: string,
    className?: string,
    OnComplete?: () => void,
    testId?: string,
}

const TextWriter = ({ text, className, OnComplete, testId }: TextWriterProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;
        gsap.fromTo(textElement.children, {
            opacity: 0,
            transform: `translateY(${APP.animation.y})`,

        }, {
            opacity: 1,
            transform: "translateY(0px)",
            duration: 1,
            stagger: 0.1,
            onComplete: () => {
                if (OnComplete) OnComplete();
            },
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div
            className={`${className} relative`}
            ref={textRef}
            data-testid={(testId) ? testId : "text-writer"}
        >{
                text.split(" ").map((char, index) => {

                    return (
                        <span key={index}>
                            <span className="inline-block relative">
                            {char}
                            </span>
                            <span> </span>
                        </span>
                    )
                })
    }

        </div>
    )
}

TextWriter.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    OnComplete: PropTypes.func,
}

export default TextWriter
