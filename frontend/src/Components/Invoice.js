import React, { Component } from 'react';
import '../Styles/FreeInvoice.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Doc from "./Pdf/DocService";
import PdfContainer from "./Pdf/PdfContainer";

class Invoice extends React.Component {
        state =  {
            invoiceNo: "",
             customerName: " ",
             invoiceDescription: " ",
            lineItems: [
            {
                name: '',
                quantity: 0,
                price: 0.00
            },
            ]
        }

        handleLineItemChange = (elementIndex) => (event) => {

            let lineItems = this.state.lineItems.map((item, i) => {
              if (elementIndex !== i) return item
              return {...item, [event.target.name]: event.target.value}
            })
        
            this.setState({lineItems})
        
          }

          handleInvoiceChange = (event) => {
            this.setState({[event.target.name]: event.target.value})
          }

          handleAddLineItem = (event) => {

            this.setState({
              lineItems: this.state.lineItems.concat(
                [{ name: '', quantity: 0, price: 0.00 , totalPrice: 0.00}]
              )
            })
        
          }

          handleRemoveLineItem = (elementIndex) => (event) => {
            this.setState({
              lineItems: this.state.lineItems.filter((item, i) => {
                return elementIndex !== i
              })
            })
          }

          calcLineItemsTotal = () => {
            return this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
          }

        
          createPdf = (html) => Doc.createPdf(html);

    render() {

        

        return(
            <React.Fragment>
        <div className="form-container">
          <div className = "header">
           <p className="invoiceform-text">Invoice Form</p>
          </div>
          

          <PdfContainer createPdf={this.createPdf}>
          <form className="invoice-form" onSubmit={this.props.onSubmit} onChange={this.handleInvoiceChange} >
          
            
            <div className="row">
              <div className="form-group col">
                <div className="sm-2 my-1">
                  <label>Invoice No.</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">#</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Invoice No"
                      name="invoiceNo"
                      id= "invoiceNo"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col">
                <label>Customer's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="customerName"
                  id="name"
                  
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Description of Invoice"
                name="invoiceDescription"
               id="invoiceDescription"
              ></textarea>
            </div>

            


            <table className="table table-responsive table-borderless">
              
                  <thead>
                    <tr>
                      <th scope="col" className="item">NAME OF ITEM</th>
                      <th scope="col" className="item-quantity">QUANTITY</th>
                      <th scope="col" className="item-price">PRICE</th>
                      <th scope="col" className="total-price">TOTAL PRICE</th>
                      <th scope="col" className="delete">DELETE ITEM</th>
                    </tr>
                  </thead>
                  <hr/>
                  
                {
                    this.state.lineItems.map((item, i) => (
                        <tbody>
                        <tr key={i}>
                        <td>
                        <input type="text"
                          className="form-control item"
                          placeholder="Name"
                          name= "name"
                         value={item.name}
                          onChange={this.handleLineItemChange(i)}
                        />
                      </td>


                      <td>
                        <input
                          type="number"
                          className=" form-control item-quantity"
                          name="quantity"
                          value={item.quantity}
                          onChange={this.handleLineItemChange(i)}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="form-control item-price"
                          name="price"
                          value={item.price}
                          onChange={this.handleLineItemChange(i)}
                          
                        />
                      </td>

                      <td className="total-price">
                        
                        {item.quantity * item.price}
                        
                       
                      </td>
                       
                      <td className="delete">
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={this.handleRemoveLineItem(i)}
                        />
                      </td>

                      
                    </tr>
                  </tbody>
                  
                    ))
                }
     
            
            </table>

            <div className="total-amount">
            <h3>Subtotal: # {this.calcLineItemsTotal()}</h3>
            </div>
            
            </form>
            </PdfContainer>

            <button
              type="button"
              className="btn btn-primary add-item-button"
              onClick={this.handleAddLineItem}
            >
              +New Item
            </button>

                
            {/* <button
              type="button"
              className="btn btn-primary generate-invoice"
              onClick = {this.handlePreview}
            >
              Preview Invoice
            </button> */}
  
        </div>
      </React.Fragment>
        );
    }
}

export default Invoice;