const checkForSpam = function(message) {
  const allStr = message.toLowerCase();
    const findWords = allStr.includes('sale') || allStr.includes('spam');
    return findWords;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true