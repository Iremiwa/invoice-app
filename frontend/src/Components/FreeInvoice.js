import React, { Component } from 'react';
import '../Styles/FreeInvoice.css';
import InvoiceForm from './InvoiceForm';



class FreeInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    render() { 
        return (      
            <React.Fragment>
                <InvoiceForm />
            </React.Fragment>
         );
    }
}
 
export default FreeInvoice;