import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { IconButton } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Container } from 'react-bootstrap';

const iconClass = mergeStyles({
    fontSize: 50,
    height: 100,
    width: 100,
});

const cardStyle = {
    width: '140px',
    height: '200px'
}

const colStyle = {
    maxWidth: '250px'
}

const Home = () => {
    return (
        <Container className="home">
            <div className="text-center mb-3">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p>
                        <p className="mb-0">Network nato con lo scopo di creare un punto centrale di collegamento tra tutti i corsi di laurea dell'università degli studi di Milano.</p>
                        Sono disponibili siti web, gruppi telegram e faq dei corsi didattici.
                    </p>
                </Text>
            </div>
            
            <div className="row m-3 justify-content-center">
                <div className="col" style={colStyle}>
                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://t.me/studenti_unimi" target="_blank">
                                <IconButton iconProps={{ iconName: "Send" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Canale Telegram
                                </Text>
                            </div>
                        </div> 
                    </div>
                </div>


                <div className="col" style={colStyle}>
                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://discord.gg/pPGUrr35sv" target="_blank">
                                <IconButton iconProps={{ iconName: "ChatBot" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Server Discord
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
};

export default Home;