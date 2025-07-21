// create a function that takes a birth year and death year and returns a formatted string
export default function formatBirthDeath (birthYear?: number, deathYear?: number) 
{
  if (!isNullOrUndefined( birthYear) && !isNullOrUndefined(deathYear) ) return 'dates unknown';
  if (!isNullOrUndefined( birthYear) && isNullOrUndefined(deathYear)) return `d. ${deathYear}`;
  if (isNullOrUndefined( birthYear) && !isNullOrUndefined(deathYear)) return `d. ${deathYear}`;
  return `b. ${birthYear} - d. ${deathYear}`;
};


export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
} 
