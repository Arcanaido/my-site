
import { Mail, Smartphone } from 'lucide-react'
import Apresentação from '../Components/apresentação.jsx'
import Face from '../assets/Face.jpeg'


const Home = () => {
  return (
    <div className="container">
      <div className='imagem'>
        <a href='https://www.linkedin.com/in/julius-maisonnette-ferreira-mota-57a31b272/'>
          <img src={Face} alt="Rosto de Julius M.F.Mota" title="Julius M.F.Mota"/>
          </a>
      </div>

      <div className='cabeçalho'>
        <h1 className="title">Front-End Developer</h1>
        <h2 className='info'>Bem Vindo!</h2>
        <Apresentação />       
        <div className='contatos'>
          
          
          <h3 className='numero-de-telefone'><Smartphone />(21) 989449117</h3>
          
          

          <h3 className='email'><Mail/><a href="mailto:jmaisonnetteferreiramota@gmail.com">jmaisonnetteferreiramota@gmail.com</a></h3>
        </div>
      </div>
      

    </div>
  )
}

export default Home
