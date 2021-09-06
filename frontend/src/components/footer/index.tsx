import { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/BlackWidow29" target="_blank" rel="noreferrer">Isabelly Dias Faustino</a></p>
                    <p className="text-light"><small><strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                </div>
            </footer>

        );
    }
}

export default Footer;