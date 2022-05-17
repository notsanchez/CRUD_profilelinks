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

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://profile-backendauth.herokuapp.com/api/users";
			const { data: res } = await axios.post(url, data);
			console.log(res.message);
            let path = `/login`; 
            history.push(path);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


  return (
    <div className="create">
      <form onSubmit={handleSubmit} className="formAccount">
        <div className="">
            <h1>Create Account</h1>
            <input 
                className="form-field" 
                type="text" 
                placeholder="Username"
                required
                name="userName"
                value={data.userName}
                onChange={handleChange}
            />
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
    </div>
  );
}

export default Signup;