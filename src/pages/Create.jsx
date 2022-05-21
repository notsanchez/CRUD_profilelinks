import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import './Create.scss'
import './Profile.css'
import FileBase64 from 'react-file-base64';
import ReactPlayer from "react-player"

const Create = () => {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [setId] = useState('');
  const [image, setImage] = useState('' || data.image);
  const [body, setBody] = useState('' || data.body);
  const [social, setSocial] = useState('' || data.social);
  const [social2, setSocial2] = useState('' || data.social2);
  const [social3, setSocial3] = useState('' || data.social3);
  const [social4, setSocial4] = useState('' || data.social4);
  const [sociallink, setSociallink] = useState('' || data.sociallink);
  const [social2link, setSocial2link] = useState('' || data.social2link);
  const [social3link, setSocial3link] = useState('' || data.social3link);
  const [social4link, setSocial4link] = useState('' || data.social4link);
  const [music, setMusic] = useState('' || data.music);
  const [bg, setBg] = useState('' || data.bg);
  const [nolink] = useState('  ');

  const history = useHistory();

  const user = localStorage.getItem('user');

  const id = user;

  useEffect(() => {
    axios
      .get('https://url-linkapi.herokuapp.com/pages/' + id)
      .then(res => {
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const dataprofile = { id, image, body, social, social2, social3, social4, sociallink, social2link, social3link, social4link, music, nolink, bg }

    fetch('https://url-linkapi.herokuapp.com/pages/'+id, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dataprofile)
    }).then(() => {
      console.log('new page add')
      let path = `${ id }`; 
      history.push(path);
    })
  }

  return (
    <div className="create">
  
      <form onSubmit={handleSubmit}>
      { loading ? data &&(
      <div>
      <title>{data.id} - Dashboard | sanchezroot.wtf</title>
      <div className="form-group">
          <span>sanchezroot.wtf/</span>
          <input 
            className="form-field" 
            type="text" 
            placeholder="Username"
            required
            disabled
            value={user}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <label>Profile Image:</label>
        <img className="create-picture"
            src={image || data.image}
            onChange={(e) => setImage(e.target.value)}
        />

        <FileBase64
        accept=".png, .jpg, .jpeg"
        name="arquivo"
        className="profileinput"
        multiple={ false }
        onDone={({base64}) => setImage(base64)} 
        />

        <label>Background:</label>

        <img className="create-bg"
            src={bg || data.bg}
            onChange={(e) => setBg(e.target.value)}
        />

        <FileBase64
        accept=".png, .jpg, .jpeg"
        name="arquivo"
        className="bginput"
        multiple={ false }
        onDone={({base64}) => setBg(base64)} 
        />
        
        <label>Bio:</label>
        <textarea 
          className="form-field"
          value={body || data.body}
          onChange={(e) => setBody(e.target.value)}
          maxLength="50"
        ></textarea>

        <hr/>

        <label>Links area:</label>
        <div className="form-group">
          <input 
          className="form-field" 
          type="text" 
          placeholder={"URL Name"}
          value={social || data.social} onChange={(e) => setSocial(e.target.value)}
          />

          <input 
          className="form-field" 
          type="text" 
          placeholder={"URL Link"}
          value={sociallink || data.sociallink} onChange={(e) => setSociallink(e.target.value)}
          />
        </div>

        <label>⠀⠀⠀⠀</label>
        <div className="form-group">
          <input 
          className="form-field" 
          type="text" 
          placeholder="URL Name"
          value={social2 || data.social2} onChange={(e) => setSocial2(e.target.value)}
          />

          <input 
          className="form-field" 
          type="text" 
          placeholder="URL Link"
          value={social2link || data.social2link} onChange={(e) => setSocial2link(e.target.value)}
          />
        </div>

        <label>⠀⠀⠀⠀</label>
        <div className="form-group">
          <input 
          className="form-field" 
          type="text" 
          placeholder="URL Name"
          value={social3 || data.social3} onChange={(e) => setSocial3(e.target.value)}
          />

          <input 
          className="form-field" 
          type="text" 
          placeholder="URL Link"
          value={social3link || data.social3link} onChange={(e) => setSocial3link(e.target.value)}
          />
        </div>

        <label>⠀⠀⠀⠀</label>
        <div className="form-group">
          <input
          
          className="form-field" 
          type="text" 
          placeholder="URL Name"
          value={social4 || data.social4} onChange={(e) => setSocial4(e.target.value)}
          />

          <input 
          className="form-field" 
          type="text" 
          placeholder="URL Link" 
          value={social4link || data.social4link} onChange={(e) => setSocial4link(e.target.value)}
          />
        </div>
        <label>⠀⠀⠀⠀</label>
        <div className="form-group">
          <input 
          className="form-field" 
          type="text" 
          placeholder="Music URL (Youtube || SoundCloud)"
          value={music || data.music} onChange={(e) => setMusic(e.target.value)}
          />
        </div>

        <ReactPlayer
            className="player-react"
            width="100%"
            height="100%"
            style={{margin: "auto", marginTop: "20px"}}
            url={data.music || music}
          />

          <button>Save</button>
        </div>
        ):(<div className="loader"></div>)}
      </form>
    </div>
  );
}

export default Create;