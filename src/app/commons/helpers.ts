import data from "@/app/commons/words.json"

export const getDictionaryOfWords = () => {
    if (Array.isArray(data)) {
        const words = data.filter((word: string) => word.length === 5);
        const newArray = words.map((word: string) => word.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        return newArray;
    } else {
        return [];
    }

}

export const getTimeFormat = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds.toString().length > 1 ? seconds : '0'+seconds}`;
}