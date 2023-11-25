import NavbarClient from "@/components/NavbarClient";
import Link from "next/link";
import Image from 'next/image';
import "./styles/clhero.css"
import LoadingScreen from "@/components/LoadingScreens/LoadingScreen";

function HomePage() {

  return (

    <>

<LoadingScreen type="gradient-waves">
        <Image
          src="/services/logo.png"
          alt="LOGO"
          width={200}
          height={200}
        />
      </LoadingScreen>

    <NavbarClient/>
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <h1>Seguridad y eficiencia en cada kilometro<span>.</span></h1>
            <h2>Transporte Moyata</h2>
          </div>
        </div>

      </div>
    </section><section id="about" className="about">
        <div className="container">

          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="/volvo.webp" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Transporte Moyata, informacion de nuestra empresa.</h3>
              <p className="fst-italic">
                En Transporte Moyata, nos enorgullece contar con una historia sólida y arraigada en la industria del
                transporte pesado, nos basamos en los siguientes pilares.
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> Ofrecer un servicio caracterizado por la excelencia, la confiabilidad y el compromiso con la
                  satisfacción del cliente.</li>
                <li><i className="ri-check-double-line"></i> Cumplir con los plazos acordados y de garantizar la seguridad de la carga durante el
                  transporte.</li>
                <li><i className="ri-check-double-line"></i> Trabajamos de manera proactiva para mantener altos estándares de calidad en cada etapa del proceso
                  logístico.</li>
              </ul>
              <p>
                Estamos orgullosos de ser parte de la comunidad de Yacuiba y, como tal, nos esforzamos por contribuir a su
                desarrollo. Valoramos la transparencia, la responsabilidad y el respeto en todas nuestras interacciones, tanto
                dentro como fuera de nuestra empresa.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section id="service" className="services pt-0">
        <div className="container">

          <div className="section-header">
            <span>Nuestros Servicios</span>
            <h2>Nuestros Servicios</h2>

          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src="/services/storage-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Storage</a></h3>
                <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src="/services/logistics-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Logistics</a></h3>
                <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src="/services/cargo-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Cargo</a></h3>
                <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src="/services/trucking-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Trucking</a></h3>
                <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src="/services/packaging-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Packaging</a></h3>
                <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src="/services/warehousing-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Warehousing</a></h3>
                <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>TOP-MAN<span>.</span></h3>
                  <p>
                    Eustaquio Mendez<br></br>
                    Pasaje Ecuador<br></br>
                    <strong>Phone:</strong> +591 (7) 450-5483 <br></br>
                    <strong>Email:</strong> e111997@uajms.edu.bo<br></br>
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Inicio</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Nosotros</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Contactos</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Trabaja con nosotros</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Servicios</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Servicios</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Storage</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Logistics</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Cargo</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Trucking</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Packaging</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Nuestro Noticiero</h4>
                <p>Reciba noticias, ofertas y promociones en su correo electronico!!!</p>
                <form>
                  <input type="email" name="email" /><input type="submit" value="Subscribirse" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>LL</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://www.uajms.edu.bo/">DTIC</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage;