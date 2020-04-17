import React from 'react';

interface IInfoFooterProps {
}

interface IInfoFooterState {
}

class InfoFooter extends React.Component <IInfoFooterProps, IInfoFooterState>{
    constructor(props : IInfoFooterProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            // TODO: stick to bottom
            <footer>
                <div>
                    <h3>Contact</h3>
                    {/*TODO: two columns*/}
                    <p>
                        Etzion Electrical engineering ltd <br/>
                        Hamashbir 26 St. <br/>
                        Holon, 58859, Israel <br/>
                    </p>
                    <p>
                        Tel: 972-3-5507450, 972-3-5504226 <br/>
                        Fax: 972-3-5591057 <br/>
                        E-mail: etzionel@netvision.net.il
                    </p>
                </div>
            </footer>
        );
    }
}

export default InfoFooter;