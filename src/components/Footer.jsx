function Footer() {
    return(
    <><footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>TOP-MAN<span>.</span></h3>
                  <p>
                    A108 Adam Street <br></br>
                      NY 535022, USA<br></br>
                        <strong>Phone:</strong> +1 5589 55488 55<br></br>
                          <strong>Email:</strong> info@example.com<br></br>
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
                          <form action="" method="post">
                            <input type="email" name="email"/><input type="submit" value="Subscribe"/>
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

export default Footer;