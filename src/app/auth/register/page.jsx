"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/login.css"

function RegisterPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm();

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword){
      return alert('Password do not match');
    }


    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (res.ok) {
      router.push('/auth/login')
    }
  });

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
                  required: {
                    value: true,
                    message: 'username is required'
                  }
                })}
              />

            {
              errors.username && (
                <span>{errors.username.message}</span>
              )
            }


            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
              { ...register("email", {
                required: {
                  value: true,
                  message: 'email is required'
                }
              })}
              />
              {
              errors.email && (
                <span>{errors.email.message}</span>
              )
            }
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"
              { ...register("password", {
                required: {
                  value: true,
                  message: 'password is required',
                }
              })}
              />
              {
              errors.password && (
                <span>{errors.password.message}</span>
              )
            }
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
              { ...register("confirmPassword", {
                required: {
                  value: true,
                  message: 'confim password is required'
                }
              })}
              />
              {
              errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )
            }
            </div>
          </fieldset>
          <div className="d-flex mt-4">
            <button type="submit" className="btn btn-outline-light m-2">Guardar</button>
            <Link href='/'>
            <button type="button" className="btn btn-outline-danger m-2">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage;