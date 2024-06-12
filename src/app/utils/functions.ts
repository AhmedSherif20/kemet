/**
 * Cleans a phone number string by removing all '+' and '-' characters.
 *
 * @param {string} phoneNumber - The phone number string to clean.
 * @returns {string} - The cleaned phone number string.
 */
function cleanPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/[+-]/g, '');
}

/**
 * Generates a WhatsApp link with a provided phone number and message.
 *
 * @param number - The phone number to include in the WhatsApp link. '+' characters will be removed.
 * @param message - The message to include in the WhatsApp link.
 * @returns The generated WhatsApp link with the provided phone number and message.
 *
 * @example
 * ```typescript
 * const whatsappLink = redirectToWhatsAppLink("+201234567891", "Hello, I'm interested in your services.");
 * console.log(whatsappLink); // "https://wa.me/201234567891?text=Hello%2C%20I'm%20interested%20in%20your%20services."
 * ```
 */
export function redirectToWhatsAppLink(
  number: string,
  message: string
): string {
  number = cleanPhoneNumber(number);
  let encodedMessage = encodeURIComponent(message);
  let whatsappLink: string = `https://wa.me/${number}?text=${encodedMessage}`;
  return whatsappLink;
}

/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * @param {number} max - The maximum value for the random integer.
 * @param {number} min - The minimum value for the random integer.
 * @returns {number} A random integer between the min (inclusive) and max (inclusive).
 *
 * @example
 * // Returns a random integer between 1 and 5
 * const randomNumber = getRandomStar(5, 1);
 */
export function getRandomNum(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
