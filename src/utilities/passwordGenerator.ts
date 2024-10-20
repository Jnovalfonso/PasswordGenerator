export default function passwordGenerator(length: number, complexity: string[]) {
    let password = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const specialChar = '!@#$%^&*()_+';
    const numbers = '0123456789';
    
    let availableChar = '';

    for (let i = 0; i < complexity.length; i++) {
        switch (complexity[i]) {
            case '1':
                availableChar += upperCase;
                break;
            case '2':
                availableChar += lowerCase;
                break;
            case '3':
                availableChar += specialChar;
                break;
            case '4':
                availableChar += numbers;
                break;
            default:
                break;
        }
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChar.length);
        password += availableChar[randomIndex];
    }

    return password;
};