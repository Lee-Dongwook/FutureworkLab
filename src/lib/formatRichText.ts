/* eslint-disable @typescript-eslint/no-explicit-any */

import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

export const formatRichText = (richText: string): string => {
  const parsedHTML = cheerio.load(richText);

  parsedHTML('pre code').each((_: any, codeBlock: any) => {
    const codeElement = parsedHTML(codeBlock);
    const languageClass = codeElement.attr('class');

    const language = languageClass?.replace(/^language-/, '') || '';
    const codeContent = codeElement.text();

    const highlightedCode = language
      ? hljs.highlight(codeContent, { language }).value
      : hljs.highlightAuto(codeContent).value;

    codeElement.html(highlightedCode);
  });

  return parsedHTML.html();
};
