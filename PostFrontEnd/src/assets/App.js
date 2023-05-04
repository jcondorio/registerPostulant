import {useState} from 'react';
import axios from 'axios';

function App() {
  const [datos,setDatos]=useState({
    usuario:"",
    clave:""
  });
  const handleInputChange=(e)=>{
    let{name,value}=e.target;
    let newDatos={...datos,[name]:value};
    setDatos(newDatos);
  }
  const heandleSubmit=async(e)=>{
    e.preventDefault();
    if(!e.target.checkValidity()){
        console.log("errores en los datos")
    }
    else{
      let res=await axios.post("http://localhost:3001/auth/usuario",datos);
      console.log(res.data);

    }
  }
  return (
    <section className="h-100">
      <div className="riw justify-content-sm-center h-100">
        <div className="col-xxl-4 col-x1-5 col-lg-5 col-md-7 col-sm-9">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h1 className="fs-4 card-title fw-bold mb-4">login</h1>
              <form onSubmit={heandleSubmit} className="needs-validations" noValidate={true} autoComplete="off">
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="email">Usuario</label>
                  <input id="email" type="text" onChange={handleInputChange} value={datos.usuario} className="form-control" name="usuario" required autoFocus></input>
                  <div className="invalid-feedback">
                    Usuario invalido
                  </div>
                </div>
                <div className="mb-3">
                  <div className="mb-2 w-100">
                    <label className="text-muted" htmlFor="password">Contrasenia</label>
                    <a href="/" className="float-end">
                      ¿Olvidaste la contraseña?
                    </a>
                  </div>
                  <input id="password" type="oasswird"  onChange={handleInputChange} value={datos.clave} className="form-control" name="clave" required></input>
                  <div className="invalid-feedback">
                    Contraseña es requerida
                  </div>
                </div>
                <div className="d-flex aling-items-center">
                  <div className="form-check">
                    <input type="checkbox" name="remember" id="remember" className="form-check-input"></input>
                    <label htmlFor="remember" className="form-check-label">Recordarme</label>
                  </div>
                  <button type="submit" className="btn btn-primary ms-auto">
                    <i className="bi bi-box-arrow-in-right"></i> Ingresar
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer py-3 border-0">
              <div className="text-center">
                huella de johan-studios
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
