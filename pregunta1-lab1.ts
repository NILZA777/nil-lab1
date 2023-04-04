function isPalindrome(text: string): boolean {
    const reversedText = text.split('').reverse().join('');
    return text === reversedText;
  }
  
  console.log(isPalindrome('ANA LAVA LANA')); // true