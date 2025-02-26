import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';
// import txt from './data/revision.txt';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#cccccc', boxShadow: '0px 0px 0.5px 0.5px #7a7a7a' }}>
            <Container style={{ backgroundColor: '#cccccc', width:'100%' }}>

                <div className="row" style={{ backgroundColor: '#cccccc' }}>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-12">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>
                                <Link href="https://github.com/StudentiUnimi" className="text-decoration-none">Studenti UniMi &copy;</Link>
                            </Text>
                        </p>

                        <p className="mb-0">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <Link href="https://github.com/StudentiUnimi/website" className="text-decoration-none"><i className="fab fa-github"></i> Repository del sito</Link>
                            </Text>
                        </p>

                        <p className="mb-1">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <Link href="https://github.com/StudentiUnimi/MultiGroupBot" className="text-decoration-none"><i className="fas fa-rocket"></i> MultiGroup bot</Link>
                            </Text>
                        </p>
                        
                        {/*
                        <p className="mb-1">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                Build: <Text style={{ fontSize: FontSizes.size10 }}>dennis</Text>
                            </Text>
                        </p>
                        */}

                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-12">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Link utili</Text>
                        </p>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://www.quickunimi.it/" className="text-decoration-none"><i className="fas fa-globe"></i> QuickUnimi</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://orientamento.di.unimi.it/index.php/iniziative/tutor-di-processo" className="text-decoration-none"><i className="fas fa-question-circle"></i> Faq matricole</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://quanto-manca.it/" className="text-decoration-none"><i className="fas fa-heart"></i> Quanto-manca.it</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://codeshare.tech" className="text-decoration-none"><i className="fas fa-meteor"></i> Codeshare.tech</Link>
                                </Text>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-12">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Altri link</Text>
                        </p>

                        <ul className="list-unstyled">
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://unimia.unimi.it/" className="text-decoration-none"><i className="fas fa-globe-europe"></i> Unimia</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://ariel.unimi.it/" className="text-decoration-none"><i className="fas fa-university"></i> Ariel</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://www.di.unimi.it/ecm/home/organizzazione/organi-di-governo/consiglio-di-dipartimento" className="text-decoration-none"><i className="fas fa-user-tie"></i> Rappresentanti degli studenti</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://vc.di.unimi.it/" className="text-decoration-none"><i className="fas fa-video"></i> Virtual Classroom</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://easystaff.divsi.unimi.it/PortaleStudenti/index.php?view=easycourse&include=corso&_lang=it&empty_box=0&col_cells=0" className="text-decoration-none"><i className="fas fa-clock"></i> Orario</Link>
                                </Text>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-0 mb-md-0 col-sm-12 contacts">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Contatti</Text>
                        </p>

                        <p>
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <p className="mb-1 text">
                                    Per qualsiasi dubbio o proposta è possibile contattare
                                    il creatore del network.
                                </p>
                                <Link href="https://t.me/giuseppetm" className="text-decoration-none" target="_blank"> @giuseppetm</Link>
                            </Text>
                        </p>
                    </div>
                </div>

            </Container>
        </footer>
    )
};

export default Footer;