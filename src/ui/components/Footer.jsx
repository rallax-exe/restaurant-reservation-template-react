

export const Footer = () => {

    const anioCopyright = new Date().getFullYear();

    return (
        <>
            <footer className="bg-dark text-center text-lg-start text-light">
                
                <div className="text-center p-3">
                    {`© ${anioCopyright}`} Copyright: &nbsp;
                    <a className="text-light" href="https://www.linkedin.com/in/raul-lara-hernandez/">
                        Raul Lara
                    </a>
                </div>
                
            </footer>
        </>
    )
}
