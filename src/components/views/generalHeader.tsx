import React from 'react';
// comps
import GoHomeButton from './goHomeButton';
// ui
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

interface GeneralHeaderProps {
    // imageRef: string;
    headerTitle: string;
    sideButton: boolean;
    // headerTextColor: string;
    // headerTextBackground: string;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({ headerTitle, sideButton }): any => {
    // * views
    const HeaderPhoto: React.FC = () => (
        <div className="news-page__section publisher">
            <Col>{sideButton ? <GoHomeButton /> : null}</Col>
            {/* <GoHomeButton /> */}
            <Col>
                <div className="news-page__section publisher">
                    <div className="logo-shield">
                        <HeaderTitle />
                    </div>
                    <div className="publisher_name"></div>
                </div>
            </Col>
            <Col>{sideButton ? null : <GoHomeButton />}</Col>
        </div>
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
