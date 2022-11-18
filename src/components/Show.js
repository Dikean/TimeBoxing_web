import React, { useState, useEffect } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import { query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Menu from './Menu'
const MySwal = withReactContent(Swal)

function Show() {

  //1- configurara hooks
  const [products, setProducts] = useState([])
  const [datos, setDatos] = useState([])
  
  //2- data firestore
  const productsCollection = collection(db, "Laboratorio")
  const datosCollection = collection(db, "datos")
  //3-mostar
  const getDatos = async () => {

    try {
       const q1 = query(datosCollection, orderBy("Turno"))
      const data = await getDocs(q1)
      let p = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDatos(p);



      localStorage.setItem('datos', JSON.stringify(p.length));
    } catch (error) {
      console.log(error)
    }

  }
  const localdatos = () => {
    let items = JSON.parse(localStorage.getItem('datos'))

    return items
  }
  const getProducts = async () => {

    try {

      const q1 = query(productsCollection, orderBy("Turno"))
      const data = await getDocs(q1)
      let p = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProducts(p);

      
      localStorage.setItem('laboratorio', JSON.stringify(p.length));
    } catch (error) {
      console.log(error)
    }

  }

  const locallaboratorio = () => {
    let items = JSON.parse(localStorage.getItem('laboratorio'))

    return items
  }
  //4 eliminar
  const deleteDatos = async (id) => {
    const productDoc = doc(db, "datos", id)
    await deleteDoc(productDoc)
    getProducts()
  }
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "Laboratorio", id)
    await deleteDoc(productDoc)
    getProducts()
  }
  //5 sweet alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el producto?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la fcion para eliminar   
        deleteProduct(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  const confirmDeleteDatos = (id) => {
    MySwal.fire({
      title: '¿Elimina el producto?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la fcion para eliminar   
        deleteDatos(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  //6 useeffect
  useEffect(() => {
    getProducts()
    getDatos()
    // eslint-disable-next-line
  }, [])
  //7 devolvemos listta del componentre
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

            </div>
            {/** chart table one */}
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 '>

                  <div class="container rounded bg-white ">
                    <div class="h2 font-weight-bold">Table Consultamedica</div>
                    <div class="table-responsive overflow-auto" id='tableoneConsulta'>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">people</th>
                            <th scope="col">Turno</th>
                            <th scope="col">name</th>
                            <th scope="col">About</th>
                          </tr>
                        </thead>
                        <tbody>
                           {datos.map((dato) => (
                            <>
                              <tr class="bg-blue" key={dato.id}>
                                <td class="pt-2"> <img src="https://img.freepik.com/vector-premium/ilustracion-vector-consulta-medica-medico-linea_311563-446.jpg?w=360" class="rounded-circle" alt="" id='imgdato' />

                                </td>
                                <td class="pt-3 mt-1">{dato.Turno}</td>
                                <td class="pt-3 mt-1">{dato.name}</td>
                                <td class="pt-3">{dato.about}</td>
                                <td class="pt-3"> <button onClick={() => { confirmDeleteDatos(dato.id) }} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button></td>
                              </tr>
                              <tr id="spacing-row">

                              </tr>
                            </>
                          ))} 

                         


                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                {/** cards table consultas */}
                <div className='col-md-4'>
                  <div class="row">



                    <div class="col-sm-12" id='card2box'>
                      <div class="card">
                        <div class="card-body  shadow-lg">
                          <h5 class="card-title">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-circle" alt="" id='imgdato' />
                            Datos Consulta Medica</h5>

                          <p class="card-text">Numero de pacientes: <span class="badge bg-secondary">{localdatos()}</span> </p>



                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>{/** end table one */}

            {/** chart table two */}
            <br /><br /><div className='container'>
              <div className='row'>
                <div className='col-md-8 '>

                  <div class="container rounded bg-white ">
                    <div class="h2 font-weight-bold">Table Laboratorio</div>
                    <div class="table-responsive overflow-auto" id='tableoneConsulta'>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">people</th>
                            <th scope="col">Turno</th>
                            <th scope="col">name</th>
                            <th scope="col">About</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <>
                              <tr class="bg-blue" key={product.id}>
                                <td class="pt-2"> <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2017/04/Lab-banner.jpg" class="rounded-circle" alt="" id='imgdato' />

                                </td>
                                <td class="pt-3 mt-1">{product.Turno}</td>
                                <td class="pt-3 mt-1">{product.name}</td>
                                <td class="pt-3">{product.about}</td>
                                <td class="pt-3"> <button onClick={() => { confirmDelete(product.id) }} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button></td>
                              </tr>
                              <tr id="spacing-row">

                              </tr>
                            </>
                          ))}



                        </tbody>
                      </table>
                    </div>
                  </div>



                </div>
                <div className='col-md-4 '>

                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body  shadow-lg">
                        <h5 class="card-title">
                          <img src="https://www.mediasource.mx/hubfs/imagenes-blog/Como-puedo-generar-mas-confianza-y-seguridad-en-los-pacientes.png" class="rounded-circle" alt="" id='imgdato' />
                          Datos Laboratorio</h5>
                        <p class="card-text">Numero de pacientes: <span class="badge bg-secondary">{locallaboratorio()}</span> </p>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>{/** end table two*/}

          </div>


        </div>
        <br />

      </section>


    </>
  )


}

export default Show