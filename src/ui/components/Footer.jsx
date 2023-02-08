


export const Footer = () => {

    const anioCopyright = new Date().getFullYear();

    return (
        <>
            <footer className=" text-center text-white">

                <div className="container p-4 container-footer">


                    <section className="mb-4">

                        <span className="img-social" role="button">
                            <i className="fab fa-facebook-f">
                               <a href="https://github.com/rallax-exe" target="_blank"><img className="img-social" src="/src/melp/img/socialMedia/githubLogo.png" alt="" /></a> 
                            </i>
                        </span>

                        <span>
                            <i className="fab fa-facebook-f">
                                <a href="https://www.linkedin.com/in/raul-lara-hernandez/" target="_blank"><img className="img-social" src="/src/melp/img/socialMedia/linkedinLogo.png" alt="" /></a>
                            </i>
                        </span>
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
