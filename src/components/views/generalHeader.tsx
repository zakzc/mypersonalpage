import React from 'react';
// comps
import GoHomeButton from './goHomeButton';
// ui
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface GeneralHeaderProps {
    imageRef: string;
    headerTitle: string;
    sideButton: boolean;
    headerTextColor: string;
    headerTextBackground: string;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
    imageRef,
    headerTitle,
    sideButton,
    headerTextColor,
    headerTextBackground,
}): any => {
    // * views
    const HeaderPhoto: React.FC = () => (
        <Container className="news-page__section publisher" style={{ backgroundColor: '#fff8ed' }}>
            <Row>
                <Col>{sideButton ? <GoHomeButton /> : null}</Col>
                <Col></Col> <Col></Col> <Col></Col>
                <Col>
                    <div className="news-page__section publisher" style={{ backgroundColor: 'fff8ed' }}>
                        <div className="logo-shield">
                            <HeaderTitle />
                        </div>
                        <div className="publisher_name"></div>
                    </div>
                </Col>
                <Col></Col> <Col></Col> <Col></Col>
                <Col>{sideButton ? null : <GoHomeButton />}</Col>
            </Row>
        </Container>
    );

    const HeaderTitle: React.FC = () => (
        <h1
            style={{
                textTransform: 'uppercase',
                fontSize: '60px',
                fontWeight: 400,
                // color: `${headerTextColor}`,
                textDecoration: 'underline',
                textDecorationColor: '#5ea5b8',
                color: '#7a5c4f',
                justifyContent: 'center',
                alignItems: 'center',
                // textShadow: '1px 1px #000000',
            }}
        >
            {headerTitle}
        </h1>
    );

    return (
        <>
            <HeaderPhoto />
        </>
    );
};
export default GeneralHeader;
