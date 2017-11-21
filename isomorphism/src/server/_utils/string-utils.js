export default function truncate(str, maxLength) {
  const string = typeof str !== 'string' ? JSON.stringify(str) : str;

  return string.length > maxLength
    ? `${string.substring(0, maxLength)}...truncate`
    : string;
}
