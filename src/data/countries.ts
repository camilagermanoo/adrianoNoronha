export function flagEmoji(code: string) {
  return String.fromCodePoint(...[...code].map((letter) => 0x1f1a5 + letter.charCodeAt(0)))
}

export function flagUrl(code: string) {
  return `https://flagcdn.com/${code.toLowerCase()}.svg`
}
