"use client"
import { useForm } from "react-hook-form";
import "../../styles/login.css"

function RegisterPage() {

  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center py-4">
      <div id="form_reg" className="col-md-6">
        <form id="espejo" className="card card-body border-primary rounded" onSubmit={onSubmit}>
          <fieldset>
            <legend>Registrarse</legend>
            <div className="form-group">
              <label className="form-label mt-4">Usuario</label>
              <input type="text" className="form-control" id="title" aria-describedby="textarea" placeholder="Usuario" 
                { ...register("username", {
                  required: true,
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
              { ...register("email", {
                required: true,
              })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
              <input type="password" className="form-control" id="" placeholder="Password" autocomplete="off"
              { ...register("password", {
                required: true,
              })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">Confirm Password</label>
              <input type="password" className="form-control" id="" placeholder="Confirm Password" autocomplete="off"
              { ...register("confirmPassword", {
                required: true,
              })}
              />
            </div>
          </fieldset>
          <div className="d-flex mt-4">
            <button type="submit" className="btn btn-outline-light m-2">Guardar</button>
            <button type="" className="btn btn-outline-danger m-2">Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage;