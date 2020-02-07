import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Styles/FreeInvoice.css';


const InvoiceForm = (props) => {
  
    return (
      <React.Fragment>
        <div className="form-container">
          <div className = "header">
           <h1>Invoice Form</h1>
          </div>
          

          <form className="invoice-form" >
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
                      onChange={props.onChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col">
                <label>Customer's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={props.onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Description of Invoice"
                name="invoiceDescription"
                onChange={props.onChange}
              ></textarea>
            </div>

            <hr />

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">QTY</th>
                  <th scope="col">UNIT PRICE</th>
                  <th scope="col">DISC.(%)</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <textarea
                      className="form-control"
                      name="description"
    
                      rows="3"
                      placeholder="Item Description"
                      name="itemDescription"
                      onChange={props.onChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
  
                      placeholder="1"
                      name="quantity"
                      onChange={props.onChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="unitPrice"
  
                      onChange={props.onChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="discount"
  
                      placeholder="0"
                      onChange={props.onChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="amount"
  
                      onChange={props.onChange}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button
              type="button"
              className="btn btn-primary"
            >
              +New Item
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick = {props.generatePdf}
            >
              Generate Invoice
            </button>
            <hr />
          </form>
        </div>
      </React.Fragment>
    );
  }


export default InvoiceForm;
