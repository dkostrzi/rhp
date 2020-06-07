import React, {useState} from 'react';
import ReactHtmlParser from 'react-html-parser';

function App() {
  const [val, setVal] = useState(`<iframe src="javascript:alert('xss')" />`)
  return (
    <>
      <input style={{width: 300}} value={val} onChange={e => setVal(e.target.value)} />
      {/* XSS Pass */}
      {ReactHtmlParser(`<div>${val}</div>`)}
      {/* XSS No Pass */}
      {ReactHtmlParser(`<img onerror="javascript:alert('x') />`)}
      {ReactHtmlParser(`<img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" />`)}
    </>
  );
}

export default App;
