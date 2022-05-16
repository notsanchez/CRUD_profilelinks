import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Profile.css'

const Profile = () => {

  const { id } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios
      .get('https://url-linkapi.herokuapp.com/pages/' + id)
      .then(res => {
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(true)
      });
  }, []);
  console.log(loading);

  return (
    <div className="blog-details">
      { error && <div>Pagina não encontrada :(</div> }
      { loading ? data && (
        <div className="body">

          <img className="profile-picture"
              src={ data.image } />

          <div className="profile-name">{ data.id }</div>
          <p className="desc">{ data.body }</p>

          <a href={ data.sociallink } className="social">
              { data.social}
          </a>
          <a href={ data.social2link } className="social">
              { data.social2}
          </a>
          <a href={ data.social3link } className="social">
              { data.social3}
          </a>
          <a href={ data.social4link } className="social">
              { data.social4}
          </a>
          <p className="author">code by @sanchezscript</p>
        </div>
      ):(
        <div className="loader"></div>
      )}
    </div>
  );
}
 
export default Profile;