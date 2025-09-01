const suggestionsMap: Record<string, string> = {
  "Add another word or two. Uncommon words are better.": "Adicione mais uma ou duas palavras. Palavras incomuns são melhores.",
  "Avoid dates and years that are associated with you": "Evite datas e anos que estejam associados a você.",
  "Use a few words, avoid common phrases": "Use algumas palavras, evite frases comuns.",
  "No need for symbols, digits, or uppercase letters": "Não há necessidade de símbolos, números ou letras maiúsculas.",
  "Use a longer keyboard pattern with more turns": "Use um padrão de teclado mais longo com mais voltas.",
};

const warningsMap: Record<string, string> = {
  "Straight rows of keys are easy to guess": "Sequências de teclas são fáceis de adivinhar.",
  "Short keyboard patterns are easy to guess": "Padrões curtos de teclado são fáceis de adivinhar.",
  "Repeats like \"aaa\" are easy to guess": "Repetições como \"aaa\" são fáceis de adivinhar.",
  "Sequences like abc or 6543 are easy to guess": "Sequências como abc ou 6543 são fáceis de adivinhar.",
  "Recent years are easy to guess": "Anos recentes são fáceis de adivinhar.",
  "Dates are often easy to guess": "Datas geralmente são fáceis de adivinhar.",
  "This is a top-10 common password": "Esta é uma das 10 senhas mais comuns.",
  "This is similar to a commonly used password": "Esta é uma das 10 senhas mais comuns.",
};

export function translateSuggestion(text: string): string {
  return suggestionsMap[text] ?? text; // se não achar, retorna original
}

export function translateWarning(text?: string): string | undefined {
  return text ? warningsMap[text] ?? text : undefined;
}
