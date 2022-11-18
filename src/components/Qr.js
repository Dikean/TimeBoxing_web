import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Menu from './Menu'
import QRCode from "react-qr-code";

import { query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";


import { collection,getDocs} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase' 

function QR() {
   
    let {about} = useParams()

   
     //1- configurara hooks
     const [products, setProducts] = useState([])
     //2- data firestore
     const productsCollection = collection(db, "datos")
     const laboratorioCollection = collection(db, "Laboratorio")
     //3-mostar
     const getProducts = async () => {

      try {
        if(about === 'Laboratorio'){
          const q = query(laboratorioCollection, orderBy("Turno"))
          const data = await getDocs(q)
          let p = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setProducts(p.length);
          localStorage.setItem('items', JSON.stringify(p[p.length-1].Turno));
        }else{
          const q1 = query(productsCollection, orderBy("Turno"))
          const data = await getDocs(q1)
          let p = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
         
        localStorage.setItem('items', JSON.stringify(p[p.length-1].Turno));
       }
      } catch (error) {
          console.log(error)
      }

  }

  const obtener = () =>{
  let items = parseInt(JSON.parse(localStorage.getItem('items')))
  console.log(items);
   return items+1
  }

  //6 useeffect
  useEffect(() => {
    getProducts()
    console.log(products);

})
  return (
    <>
    <Menu></Menu>
    <section className="dashboard">
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle"></i>

                   

                </div>

                


                <div className="dash-content">
            
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="text">Codigo QR - {about}</span>
                        </div>

                        <div className='container' >
          <div className='row'>
            <div className='col'>
              <div className="d-grid gap-2">
              
              </div>
              <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "30%", marginLeft: 50,}}
    value={''+obtener()}
    viewBox={`0 0 256 256`}
    />
            </div>
            <h5 id='qr'>turno a tomar : { obtener()}</h5>
          </div>
        </div>


                    </div>

       
                </div>
              <br/>




              
            </section>
    </>
  )
}

export default QR