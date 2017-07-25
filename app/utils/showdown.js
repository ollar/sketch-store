import showdown from 'npm:showdown';

export default function showdownHelper(md) {
  const converter = new showdown.Converter();

  return converter.makeHtml(md);
}
