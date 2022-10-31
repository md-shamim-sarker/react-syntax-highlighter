import React from 'react';
import CodeHighlighter from './components/CodeHighlighter';

const App = () => {
  return (
    <div>
      <h2>Code Highlighter</h2>
      <CodeHighlighter>{`console.log('Shamim Sarker')`}</CodeHighlighter>
    </div>
  );
};

export default App;