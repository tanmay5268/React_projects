import { useNavigate } from "react-router-dom"
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Projects
