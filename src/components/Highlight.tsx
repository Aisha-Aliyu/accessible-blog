'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Highlight({ code, language }: { code: string; language: string }) {
  return <SyntaxHighlighter language={language} style={tomorrow}>{code}</SyntaxHighlighter>;
}