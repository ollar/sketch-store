export default function stripTags(text) {
  if (!text) return;
  return text.replace(/(<([^>]+)>)/ig, '');
}
