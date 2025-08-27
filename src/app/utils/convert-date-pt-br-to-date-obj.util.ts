export const convertDatePtBrToDateObj = (date: string): Date | null => {
  if(!date) return null;

  const [ day, month, year ] = date.split('/').map(Number);
  const validDate = isValidDate(day, month, year);

  return validDate ? new Date(year, month - 1, day) : null;
}

const isValidDate = (day: number, month: number, year: number): boolean => {
  const date = new Date(year, month - 1, day);
  const isValid = date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;

  return isValid ? true : false;
}