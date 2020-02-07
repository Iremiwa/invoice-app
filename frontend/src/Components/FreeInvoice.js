import React, { Component } from 'react';
import '../Styles/FreeInvoice.css';
import InvoiceForm from './InvoiceForm';
import axios from 'axios';
import { saveAs } from 'file-saver';



class FreeInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceNo: 1,
            name: '',
            invoiceDescription: '',
            itemDescription: '',
            quantity: 0,
            unitPrice: 0,
            discount: 0,
            amount: 0
        }
    }

    handleChange = ({target: {value, name}}) => this.setState({[name] : value})

        

    handlegeneratePdf = () => {
        const formData = this.state;
        console.log(formData);
        axios.post('/generatepdf', formData)
        .then(() => axios.get('fetchpdf', { responseType: 'blob' }))
        .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

            saveAs(pdfBlob, 'newPdf.pdf');
        })
    }

    render() { 
        return (      
            <React.Fragment>
                <InvoiceForm onChange = {this.handleChange} generatePdf = {this.handlegeneratePdf}/>
            </React.Fragment>
         );
    }
}
 
export default FreeInvoice;