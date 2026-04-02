import "./Footer.css";

export const Footer = ()=> {
    return (
        <footer className="footer">
            <p className="footer__legal">
                ParadoxPoint Store – Operación autorizada por 
                <strong>
                    <a 
                        className="footer__legal__credits__link" 
                        href="https://deathwolfcompany.com.ar/"
                        target="_blank"
                        data-text="Death Wolf Company"
                    >
                        Death Wolf Company
                    </a>
                </strong> 
                | Protocolo de no-linealidad activa | Todos los derechos reservados en todas las líneas temporales conocidas y por conocer
            </p>
        </footer>
    )
}