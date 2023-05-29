import { COMPONENTS } from "../constants";

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
export const synthVoice = () => {
    return new Promise(resolve=>
      window.speechSynthesis.onvoiceschanged = resolve)

  }

export const findMaleVoice = (voices: SpeechSynthesisVoice[]) => {
    let maleVoice = voices[3];
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name.includes('Male')) {
                maleVoice = voices[i];
                 break;
            }
    return maleVoice;
}

}

export const textToSpeech = (text: string, onStart?: () => void ) => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    synthVoice().then(() => {
        const voices = synth.getVoices();
        utterThis.voice = voices[3];
        utterThis.lang = 'en-US';
        utterThis.pitch = 0.65;
        utterThis.rate = 1.1;
        utterThis.volume = 0.7;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        utterThis.onstart = onStart ? onStart : () => {};
        synth.speak(utterThis);
    }).catch(() => {
        onStart ? onStart() : null;
    });
}

export const guardQuestion = (question: string) => {
    let shouldReturn;
    if (!question) {
        if (COMPONENTS.Quiz.skippable) {
            alert(COMPONENTS.Quiz.canSkipAlertText)
            shouldReturn = false;
        } else {
            alert(COMPONENTS.Quiz.cannotSkipAlertText)
            shouldReturn = true;
        }
    }
    return shouldReturn;
}
