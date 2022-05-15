import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Create.scss'

const Create = () => {

  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [social, setSocial] = useState('');
  const [social2, setSocial2] = useState('');
  const [social3, setSocial3] = useState('');
  const [social4, setSocial4] = useState('');

  const [sociallink, setSociallink] = useState('');
  const [social2link, setSocial2link] = useState('');
  const [social3link, setSocial3link] = useState('');
  const [social4link, setSocial4link] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id, image, body, social, social2, social3, social4, sociallink, social2link, social3link, social4link }

    fetch('https://url-linkapi.herokuapp.com/pages/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('new page add')
      let path = `${ id }`; 
      history.push(path);
    })
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <span>braindead.jsx/</span>
          <input 
            className="form-field" 
            type="text" 
            placeholder="Username"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <label>Image:</label>
        <input 
          type="text"
          required
          value={image}
          placeholder="exemplo: https://imgur.com/PNE6xvi.png"
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Bio:</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <hr/>
        <label>Link 1</label>
        <div className="form-group">
          <input className="form-field" type="text" required placeholder="URL Name" value={social} onChange={(e) => setSocial(e.target.value)}/>
          <input className="form-field" type="text" placeholder="URL Link" value={sociallink} onChange={(e) => setSociallink(e.target.value)}/>
        </div>
        <label>Link 2</label>
        <div className="form-group">
          <input className="form-field" type="text" required placeholder="URL Name" value={social2} onChange={(e) => setSocial2(e.target.value)}/>
          <input className="form-field" type="text" required placeholder="URL Link" value={social2link} onChange={(e) => setSocial2link(e.target.value)}/>
        </div>
        <label>Link 3</label>
        <div className="form-group">
          <input className="form-field" type="text" required placeholder="URL Name" value={social3} onChange={(e) => setSocial3(e.target.value)}/>
          <input className="form-field" type="text" required placeholder="URL Link" value={social3link} onChange={(e) => setSocial3link(e.target.value)}/>
        </div>
        <label>Link 4</label>
        <div className="form-group">
          <input className="form-field" type="text" required placeholder="URL Name" value={social4} onChange={(e) => setSocial4(e.target.value)}/>
          <input className="form-field" type="text" required placeholder="URL Link" value={social4link} onChange={(e) => setSocial4link(e.target.value)}/>
        </div>
          <button>Criar</button>
      </form>
    </div>
  );
}

export default Create;