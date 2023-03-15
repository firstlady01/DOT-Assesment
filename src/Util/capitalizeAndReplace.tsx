export default function CapitalizeAndReplace(str: string) {
    const words = str.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedString = capitalizedWords.join(' ');

    return capitalizedString;
}