import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../context/ThemeContext';
import { Play } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', filename = 'example.py' }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="bg-slate-50 dark:bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <span className="text-xs font-mono text-slate-500">{filename}</span>
        <button className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline">
          <Play size={12} /> Run Code
        </button>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={theme === 'dark' ? vscDarkPlus : vs}
        customStyle={{ margin: 0, padding: '2rem', fontSize: '14px' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
