export const getCurrentTime = () => {
    const date = new Date();
    return date.getTime();
}
export const getFutureTime = (mins: number) => {
    const date = new Date();
    return new Date(date.getTime() + mins * 60000);
}
