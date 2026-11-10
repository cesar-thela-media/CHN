import { Fragment, type ReactNode } from "react";

/**
 * Lays out a verbatim copy string as display lines without changing a word.
 * `breaks` are the words that start a new line; `em` is the phrase set in
 * italic. Both must occur in `text`; the string itself is never edited.
 */
export function rich(text: string, breaks: string[] = [], em?: string, lineClass?: string): ReactNode {
  let marked = text;
  for (const word of breaks) marked = marked.replace(` ${word}`, `\n${word}`);
  const lines = marked.split("\n");
  return lines.map((line, i) => {
    const parts = em && line.includes(em) ? line.split(em) : [line];
    const content =
      parts.length === 2 ? (
        <>
          {parts[0]}
          <em>{em}</em>
          {parts[1]}
        </>
      ) : (
        line
      );
    if (lines.length === 1) return <Fragment key={i}>{content}</Fragment>;
    return (
      <span key={i} className={lineClass}>
        {content}
        {i < lines.length - 1 ? " " : null}
      </span>
    );
  });
}
