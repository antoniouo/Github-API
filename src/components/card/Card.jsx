import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentRepo, getContributors } from '../actions/repos';
import './card.less'

const Card = () => {
  const navigate = useNavigate()
  const {username, reponame} = useParams()
  const [repo, setRepo] = useState({owner: {}})
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo)
    getContributors(username, reponame, setContributors)
  }, [])

  return (
    <div>
      <button onClick={() => navigate(-1)} className="back-btn">BACK</button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="" />
        <div className="name">{repo.name}</div>
        <div className="stars">{repo.stargazers_count}</div>    
      </div>
      
      {contributors.map((c, index) =>
        <div>{index+1}. {c.login}</div>
      )}
    </div>
  );
};

export default Card;

// const {username, reponame} = useParams() - обращаемся к этим id в App, работает именно таким образом (<Route path="/card" element={<Card />} />) - все это снова про React Router
// также не забываем изменить маршрут в ссылке при нажатию на которую мы переходим на страницу репозитория (в файле Repo.jsx) -            <div className="repo-header-name"><NavLink to={`/card/>${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div> - добавляем там имя пользователя и названия репозитория

