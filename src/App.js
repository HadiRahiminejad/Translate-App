import React, {useState} from 'react';
import './styles.css';
import './App.css';
import Field from './components/field.js';
import Translate from './components/translate.js';
import Languages from './components/languages.js';

function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');
  return (
    <div>
      <Field  onChange={setText}/>
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
