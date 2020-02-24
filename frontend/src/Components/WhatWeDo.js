import React from 'react';
import '../Styles/WhatWeDo.css';

class WhatWeDo extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className="how-it-works-container" id="howItWorks">

                
                    <div className = "section-body">
                        <p className="text">How Instabill Works</p>
                        <p>We offer a free, simple and secure way to bill your clients </p>
                    </div>
                    <div className = "card-section">
                        <div className="card-deck">
                        <div className="card text-white bg-info mb-3">
                            <div className="card-body">
                            <h4 className="card-title">Create Invoice</h4>
                            <p className="card-text">Say goodbye to paper invoices. Instabill alows you 
                            create beautiful invoices online for free</p>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-body">
                            <h4 className="card-title">Send to Client</h4>
                            <p className="card-text">Send invoice to clients via E-mail. Invoices can be viewed and downloaded instantlyfrom anywhere in the world.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-body">
                            <h4 className="card-title">Get Paid Faster </h4>
                            <p className="card-text">Get paid faster by sending an invoice to your client once the job is done.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WhatWeDo;