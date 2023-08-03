import React, { useState } from 'react';
import Questions from '../components/Questions/Questions';

const Perguntas = () => {
  const [pergunta, setPergunta] = useState('');
  const [respostas, setRespostas] = useState([
    { resposta: '', correta: false },
    { resposta: '', correta: false },
    { resposta: '', correta: false },
    { resposta: '', correta: false },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedRespostas = respostas.map((resposta, i) =>
        i === index ? { ...resposta, correta: checked } : resposta
      );
      setRespostas(updatedRespostas);
    } else {
      setPergunta(value);
    }
  };

  const handleRespostaChange = (e, index) => {
    const { value } = e.target;
    const updatedRespostas = respostas.map((resposta, i) =>
      i === index ? { ...resposta, resposta: value } : resposta
    );
    setRespostas(updatedRespostas);
  };

  const handleSave = () => {
    axios.post("http://localhost:3000/sala/criarPergunta", {
        pergunta,
        respostas
    }).then((resp) => {
        if(resp.status === 200){
          console.log(resp)
        }
      }).catch((err) => {
          console.log(err);
      });
  };    

  return (
    <>
      <Questions.Input
        placeholder="Digite a pergunta"
        value={pergunta}
        onChange={handleInputChange}
      />
      {respostas.map((resposta, index) => (
        <Questions.Perguntas key={index}>
          <Questions.Input
            placeholder={`Insira a resposta ${index + 1}`}
            value={resposta.resposta}
            onChange={(e) => handleRespostaChange(e, index)}
            type="text"
            name={`resposta-${index}`} 
          />
          <Questions.Checkbox
            type="checkbox"
            onChange={(e) => handleInputChange(e, index)}
            checked={resposta.correta}
          />
        </Questions.Perguntas>
      ))}
      <Questions.Button onClick={handleSave}>Salvar</Questions.Button>
    </>
  );
};

export default Perguntas;
