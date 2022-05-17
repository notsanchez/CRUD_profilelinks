import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Create.scss'
import './Profile.css'

const Login = () => {
	const [data, setData] = useState({ userName: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://profile-backendauth.herokuapp.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
            <h1>Login</h1>
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
            Login
        </button>
        <h4>New here?</h4>
        <Link to="/signup">
		    <button type="button">
				Sing Up
			</button>
		</Link>
      </form>
    </div>
  );
}

export default Login;