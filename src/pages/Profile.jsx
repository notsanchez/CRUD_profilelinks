import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import './Profile.css'

const Profile = () => {
  const { id } = useParams();
  const { data: data, error } = useFetch('https://url-linkapi.herokuapp.com/pages/' + id);

  return (
    <div className="blog-details">
      { error && <div>Pagina não encontrada :(</div> }
      { data && (
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
      )}
    </div>
  );
}
 
export default Profile;