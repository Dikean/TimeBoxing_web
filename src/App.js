import { Link } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

      <Menu></Menu>

      <section className="dashboard">
        <div className="top">
          <i className="uil uil-bars sidebar-toggle"></i>

        </div>


        <div className="dash-content">

          <div className="overview">
            <div className="title">
              <i className="uil uil-tachometer-fast-alt"></i>
              <span className="text">Elija su turno</span>
            </div>

            <div className='container'>
              <div className='row'>
                {/**  Turn  */}
                <div className='col-md-8'>

                  <div class="card ">
                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2022/10/sistema-de-turnos-de-trabajo.jpg" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Timeboxing</h5>

                    </div>
                  </div><br></br><br></br>
                  <div className='container'>
                    <div className='row'>
                      <div className='col'>
                        <div className="d-grid gap-2">
                        </div>
                        <div className='container'>
                          <div className='row'>
                            <div className='col-md-5 '>

                              <div class="card">
                                <img src="https://static.wixstatic.com/media/55c3a2_e31027de433e4b61a81060254e9851bc~mv2.png/v1/fill/w_614,h_409,al_c,lg_1,q_85,enc_auto/55c3a2_e31027de433e4b61a81060254e9851bc~mv2.png" className="card-img-top" alt="..." />

                                <div class="card-body">
                                  <h5 class="card-title">Consulta medica</h5>
                                  <Link to="/QR/Consulta_Medica" className="btn btn-primary">Pedir cita  </Link>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-1'></div>
                            <div className='col-md-5 '>

                              <div class="card">
                                <img src="https://laboratoriomartinez.com/wp-content/uploads/2018/11/laboratorio-clinico-en-santa-marta.jpg" className="card-img-top" alt="..." />
                                <div class="card-body">
                                  <h5 class="card-title">Laboratorio</h5>
                                  <Link to="/QR/Laboratorio" className="btn btn-primary">Pedir cita  </Link>
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>{/** end container turn */}

                </div>{/**  col-md-8 Turn  */}
                {/** start sidebar rigth */}
                <div className='col-md-4 '>
                  <h3>Equipo de Trabajo</h3>
                  <div class="card" >
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164207504/original/24b5554b588aa0ccb60d858eab372be9aa34756d/create-social-media-avatar-minimalist-style.jpg" class="card-img-top" alt="..." id='imgdeveloper' />
                    <div class="card-body">
                      <p class="card-text">Dylan Aponte</p>
                    </div>
                  </div><br></br>

                  <div class="card" >
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98381915/original/79769d7b92cdf570c23f4099bcbf29bd78386b1c/design-minimalist-flat-line-vector-avatar-of-you.jpg" class="card-img-top" alt="..."  id='imgdeveloper'/>
                    <div class="card-body">
                    <p class="card-text">Fabian Garcia</p>
                      </div>
                  </div><br></br>

                  <div class="card" >
                    <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/117307409/original/da7657cc9df2f4a2a09e6fd4539e4c42196cd685.jpg" class="card-img-top" alt="..." id='imgdeveloper' />
                    <div class="card-body">
                    <p class="card-text">Jenaro jimenez</p>
                      </div>
                  </div><br></br>
                  <div class="card" >
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164207504/original/24b5554b588aa0ccb60d858eab372be9aa34756d/create-social-media-avatar-minimalist-style.jpg" class="card-img-top" alt="..." id='imgdeveloper' />
                    <div class="card-body">
                    <p class="card-text">Luis torres</p>
                      </div>
                  </div><br></br>
                  
                </div> {/** end sidebar rigth */}
              </div>
            </div>




          </div>


        </div>
        <br />
      </section>



    </>

  );
}

export default App;
