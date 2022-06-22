import "./index.css";
import Search from "./components/Search";

const listg = [
  {
      id: 1,
      description: 'Rapidisimo llevo mi encargo a tiempo y en la fecha programada, mis clientes se encuentran satisfechos y cada dia aumentan mas, gracias Rapidisimo!',
      imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/profile-1_zr00sb.jpg',
      name: 'Alvaro Ruiz',
      charge: "Gerente, Ventas ARZ"
  },
  {
      id: 2,
      description: 'Un dia pense en dedicarme mas al mercadeo de mi empresa, asi que encontre a Rapidisimo y me ahorro un 70% mas de tiempo en la  entrega de mis productos',
      imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/profile-2_eihrlc.jpg',
      name: 'Camilo Zambrano',
      charge: "Fundador & CEO, Mostly"
  },
  {
      id: 3,
      description: 'Me encanta poder saber que hoy en dia solo me preocupo por mis ventas, ya que con rapidisimos el tema de mi envio de mercancia ya no es problema',
      imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/profile-3_hvihb6.jpg',
      name: 'Alejandra Bustamante',
      charge: "Gerente, Huddle"
  }
];

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand aLogo" href="#page-top"><img className="imgLogo" src="https://res.cloudinary.com/rapidisimo/image/upload/v1655820881/rapidisimo/logo_rapidisimo_ft6nuq.png" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#scroll">Conocenos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contactenos">Contáctenos</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">Rapidisimo</h1>
                        <h2 className="masthead-subheading mb-0">Tu Mejor Opcion</h2>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Conocenos</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>

        <section>
            <Search/>
        </section>

        <section id="scroll" style={{marginTop: "5%"}}>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="https://res.cloudinary.com/docutv7ug/image/upload/v1654562291/rapidisimo/1_vfshy2.jpg" alt="confiabilidad" /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Confiabilidad</h2>
                            <p style={{textAlign: "justify"}}>Contamos con una red amplia de comercios aliados, que ya depositaron su confianza con nosotros, evaluando y llenando sus expectativas, siempre brindando toda la informacion posible para nuestros clientes y usuarios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="https://res.cloudinary.com/docutv7ug/image/upload/v1654561407/rapidisimo/Eficiencia_kx2gs3.jpg" alt="Eficiencia" /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Eficiencia</h2>
                            <p style={{textAlign: "justify"}}>Siempre aprovechamos las mejores oportunidades para trerte a ti esa experiencia en donde sientas que todo un gran equipo, una gran flota y una gran logistica estaran prestos para entregarte tu mensajeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="https://res.cloudinary.com/docutv7ug/image/upload/v1654562290/rapidisimo/2_sow30n.jpg" alt="Eficacia" /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Eficacia</h2>
                            <p style={{textAlign: "justify"}}>Durante 24 horas al dia, 7 dias a la semana, 365 dias al año, estamos trabajando para llevarte tus encargos a todos los rincones de colombia, siempre a tiempo y en perfecto estado tus envios seran enviados y recibidos en perfecto estado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="https://res.cloudinary.com/docutv7ug/image/upload/v1654562290/rapidisimo/3_er6e0d.jpg" alt="Eficiencia" /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Empatía</h2>
                            <p style={{textAlign: "justify"}}>Sabemos no solo los atributos de productividad definen a una gran empresa, para que esto sea posible la empatia debe consolidarse como un de los grandes pilares, es por eso que Rapidisimo es un proyecto innovador, empatico procurando el bienestar de todas las personas a nuestro alrededor. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
        <div className="generalcont" style={{marginTop: "5%"}}>
            {listg.map((list, idx) => (
                <div className="gen2" key={list.id + idx}>
                <div className="cardContComent">
                    <p className="pComentarios">
                    {list.description}
                    </p>
                    <div className="conteProfileGeneral">
                    <img className="imgProfile" src={list.imgUrl} alt="Imagenes de Personas" />
                        <div className="name">
                            <span style={{fontSize:"1em"}}>{list.name}</span>
                            <br />
                            <span style={{fontSize:"0.9em"}}>{list.charge}</span>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>

        <a name="contactenos" href="/" style={{visibility: "hidden"}}>ss</a>
        <div className="btnContactUs">
              <a className="btn btn-primary btnContactA" href="mailto:dev.rapidisimo@gmail.com"  >Contáctenos</a>
        </div>

        <footer className="py-5 footColor" style={{marginTop: "5%"}}>
            <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Rapidisimo 2022</p></div>
            <div className="icons">
                        <a href="/"><img style={{height: "25px", width: "25px"}} src="https://res.cloudinary.com/docutv7ug/image/upload/v1654651444/rapidisimo/facebook_q3wpeh.png" alt="icono Facebook"/></a>
                        <a href="/" style={{marginLeft: "2%", marginRight: "2%"}}><img style={{height: "25px", width: "25px"}} src="https://res.cloudinary.com/docutv7ug/image/upload/v1654652241/rapidisimo/instagram_3_vsywrv.png" alt="icono Instagram"/></a>
                        <a href="/"><img style={{height: "25px", width: "25px"}} src="https://res.cloudinary.com/docutv7ug/image/upload/v1654651543/rapidisimo/pinterest_ark4iw.png" alt="icono Pinterest"/></a>
                </div>
        </footer>
        
    </div>
  );
}

export default App;
