"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import "../../styles/login.css"

function LoginPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm();

  const router = useRouter();
  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async (data) => {
  
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res)
    if (res.error) {
      setError(res.error)
    } else {
      router.push('/users')
    }
  });

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center py-4">
      <div id="form_reg" className="col-md-6">
        <form id="espejo" className="card card-body border-primary rounded" onSubmit={onSubmit}>
          <fieldset>
            <legend>Iniciar Sesion</legend>
            {error && (
              <p className="text-danger"><strong>{error}</strong></p>
            )}
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
              <input type="password" className="form-control" id="password" placeholder="******"
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
          </fieldset>
          <div className="d-flex mt-4">
            <button type="submit" className="btn btn-outline-light m-2">Entrar</button>
            <Link href='/'>
            <button type="button" className="btn btn-outline-danger m-2">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginPage;