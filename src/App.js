import Sidebar from './components/Sidebar'
import face from './img/Face.jpeg'

function App() {

  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })

  return (
    <div className="main">
      <Sidebar />
      <div className="container">
         <div className= "imagem">
           <a href='https://www.linkedin.com/in/julius-maisonnette-ferreira-mota-57a31b272/'> <img src={face} alt="Rosto de Julius M.F.Mota" title="Julius M.F.Mota"/></a>
         </div>
        
        <div className="cabeçalho">
         <h1 className="title">Front-End Developer</h1>
         <h2 className="info">Bem vindo!</h2>
         <h2 className="apresentação">Este é o projeto React feito pelo desenvolvedor Julius Maisonnette Ferreira Mota.<br />Nesta pagina terão <em>tutorias de matematica e de formulas simples</em> <br />acompanhado de calculadoras para resolver essas formulas.</h2>
        </div>
      </div>
    </div>
  )
}

export default App