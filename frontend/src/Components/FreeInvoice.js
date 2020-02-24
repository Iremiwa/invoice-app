import React, { Component } from 'react';
import '../Styles/FreeInvoice.css';
import InvoiceForm from './InvoiceForm';
import axios from 'axios';
import { saveAs } from 'file-saver';



class FreeInvoice extends Component {
    constructor(props) {
        super(props);
         this.state = {
             invoiceNo: "",
             name: " ",
             invoiceDescription: " ",
             lineItems: [
                 {
                     itemDescription: " ",
                     quantity: 0,
                     unitPrice: 0,
                     discount: 0,
                     amount: 0
                 }
             ],
             totalAmount: 0
            
         }

        
    }


    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

    // handleChange = (e) => {
    //     if(["itemDescription", "quantity", "unitPrice", "discount", "amount"].includes(e.target.className)) {
    //         let lineItems = [...this.state.lineItems]
    //         lineItems[e.target.dataset.id][e.target.className] = e.target.value
    //         this.setState({lineItems}, () => console.log(this.state.lineItems))
    //     } else {
    //         this.setState({ [e.target.name] : e.target.value })
    //     }
    // }

    // addNewRow = (e) => {
    //     alert('button clicked');
    //     this.setState((prevState) => ({
    //         lineItems: [...prevState.lineItems, {
    //             itemDescription: '',
    //                 quantity: 0,
    //                 unitPrice: 0,
    //                 discount: 0,
    //                 amount: 0
    //         }]
    //     }));

    //     console.log(this.state);
    // }


   

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
                <InvoiceForm onChange = {this.handleChange} generatePdf = {this.handlegeneratePdf} newRow = {this.addNewRow} />
            </React.Fragment>
         );
    }
}
 
export default FreeInvoice;