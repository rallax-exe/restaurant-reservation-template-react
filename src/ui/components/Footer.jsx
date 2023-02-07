import { Link } from "react-router-dom";


export const Footer = () => {

    const anioCopyright = new Date().getFullYear();

    return (
        <>
            <footer className=" text-center text-white">

                <div className="container p-4 container-footer">


                    <section className="mb-4">

                        <Link className="img-social" role="button">
                            <i className="fab fa-facebook-f">
                                <img className="img-social" src="../../../assets/images/socialMedia/githubLogo.png" alt="" />
                            </i>
                        </Link>

                        <Link  href="#!" role="button">
                            <i className="fab fa-facebook-f">
                                <img className="img-social" src="../../../assets/images/socialMedia/linkedinLogo.png" alt="" />
                            </i>
                        </Link>

                    </section>

                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </section>



                </div>



                <div className="text-center p-3 container container-copyright">
                    © {anioCopyright} Copyright:&nbsp;
                    <span className="text-white">Raul Lara</span>
                </div>


            </footer>
        </>
    )
}
