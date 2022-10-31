import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const jsHighlighter = (code) => {
    return (
        <SyntaxHighlighter language='jsx' style={prism}>
            {code}
        </SyntaxHighlighter>
    );
};

const CodeHighlighter = ({children}) => {
    return (
        <div className='mx-[1px] md:mx-5'>
            {jsHighlighter(children)}
        </div>
    );
};

export default CodeHighlighter;