import { gsap } from 'gsap';
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

export interface ElementAnimationProps {
    children: React.ReactNode,
    className?: string,
    OnComplete?: () => void,
}

const ElementAnimation = ({ children, className, OnComplete }: ElementAnimationProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        gsap.fromTo(element, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            onComplete: () => {
                if (OnComplete) OnComplete();
            },
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div
            className={`${className}`}
            ref={elementRef}
        >{
                children
    }

        </div>
    )
}

ElementAnimation.propTypes = {
    className: PropTypes.string,
    OnComplete: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default ElementAnimation
