import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import './Create.scss'
import './Profile.css'
import axios from 'axios';

const Signup = () => {
	const [data, setData] = useState({
		userName: "",
		password: "",
	});


  const history = useHistory();
	const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [image] = useState('https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png');
  const [body] = useState('');
  const [social] = useState('');
  const [social2] = useState('');
  const [social3] = useState('');
  const [social4] = useState('');
  const [sociallink] = useState('');
  const [social2link] = useState('');
  const [social3link] = useState('');
  const [social4link] = useState('');
  const [music] = useState('');
  const [nolink] = useState('');
  const [bg] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
    setLoading(false);
		e.preventDefault();
		try {
			const url = "https://profile-backendauth.herokuapp.com/api/users";
			const { data: res } = await axios.post(url, data);
			console.log(res.message);

      const dataprofile = { image, body, social, social2, social3, social4, sociallink, social2link, social3link, social4link, music, nolink, bg }

      fetch('https://url-linkapi.herokuapp.com/pages/'+data.userName, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dataprofile)
      }).then(() => {
        console.log('new page add')
      })
      let path = `/login`; 
      history.push(path);

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        setLoading(true);
        let path = `/signup`; 
        history.push(path);
			}
		}


	};


  return (
    <div className="create">
      <title>Sign Up | sanchezroot.wtf</title>
      { loading ? (
      <form onSubmit={handleSubmit} className="formAccount">
        <div className="">
            <h1>Create Account</h1>
            <div className="form-group">
              <span>sanchezroot.wtf/</span>
              <input 
                className="form-field" 
                type="text" 
                placeholder="Username"
                required
                name="userName"
                value={data.userName}
                onChange={handleChange}
              />
            </div>
            <input 
                className="form-field" 
                type="password" 
                placeholder="Password"
                required
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            </div>
        {error && <p>{error}</p>}
        <button type="submit">
            Sign Up
        </button>
        <h4>Have an account?</h4>
        <Link to="/login">
		    <button type="button">
				Login
			</button>
		</Link>
      </form>
      ):(<div className="loader"></div>)}
    </div>
  );
}

export default Signup;