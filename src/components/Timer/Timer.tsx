import { useTimer } from "react-timer-hook";
import { getFutureTime } from "../../helper";
import { QUIZ } from "../../constants";
import { useEffect } from "react";

const Timer = ({...props}) => {
    const expiryTimestamp = getFutureTime(QUIZ.timer);
    const { handleAnswer, stopProps } = props;
    const {
        seconds,
        minutes,
        hours,
        days,
        pause,
      } = useTimer({ expiryTimestamp, onExpire: () => handleAnswer() });
    useEffect(() => {
        if (stopProps) {
            pause();
        }
    }, [stopProps, pause])

    return (
        <p>{`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}</p>
    );
};

export default Timer;
