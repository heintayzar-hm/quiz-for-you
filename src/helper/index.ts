export const getCurrentTime = () => {
    const date = new Date();
    return date.getTime();
}
export const getFutureTime = (mins: number) => {
    const date = new Date();
    return new Date(date.getTime() + mins * 60000);
}

export interface AnswerProps {
    answer: string;
    selected: string;
}

export const answerFormat = ({answer,selected }: AnswerProps, bool: boolean) => {
    if (bool) {
        return `You answered ${selected} and correct, you have improved the chance to save the world!`
    }
    if(selected === '') return `You didn't answer this question, you have to be faster to save the world!`
    return `You answered ${selected} and the correct answer is ${answer} but don't worry! Heroes never give up!`
}
