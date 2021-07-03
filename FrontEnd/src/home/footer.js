import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>
                <div className="text-center p-1" style={{ backgroundColor: 'background-color: rgba(0.1, 0.2, 0, 0.2)'}}>
                    From_Group_09_Team :
                    <a className="text-white" href="https://#/">  www.Ruvindu_Tan_Buddi_Ishini.com </a>
                </div>
            </footer>
        );
    }
}
export default Footer;
