import zxcvbn from 'zxcvbn';
import { translateSuggestion, translateWarning } from './password-strength-.translations.util';

export type PasswordStrength = {
  value: number;   // porcentagem (0–100)
  label: string;   // descrição
  color: 'weak-password' | 'medium-password' | 'strong-password'; // cor da barra
  suggestions: string[]; // dicas de melhoria
  warning?: string; // aviso principal
  score: number;   // score cru do zxcvbn (0–4)
}

const scoreMap: Record<number, Omit<PasswordStrength, 'suggestions' | 'warning' | 'score'>> = {
  0: { value: 10, label: 'muito fraca', color: 'weak-password' },
  1: { value: 30, label: 'fraca', color: 'weak-password' },
  2: { value: 50, label: 'média', color: 'medium-password' },
  3: { value: 75, label: 'forte', color: 'strong-password' },
  4: { value: 100, label: 'excelente', color: 'strong-password' },
};

export const getPasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return { value: 0, label: 'Vazia', color: 'weak-password', suggestions: [], score: 0 };
  }

  const result = zxcvbn(password);
  const base = scoreMap[result.score];

  return {
    ...base,
    suggestions: result.feedback.suggestions.map(translateSuggestion),
    warning: translateWarning(result.feedback.warning),
    score: result.score
  };
};
