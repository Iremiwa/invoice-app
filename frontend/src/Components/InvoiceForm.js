import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Styles/FreeInvoice.css';


class InvoiceForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className = "header">
           <h1>Invoice Form</h1>
          </div>
          

          <form className="invoice-form">
            <div className="row">
              <div className="form-group col">
                <div className="sm-2 my-1">
                  <label for="inlineFormInputGroup">Invoice No.</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">#</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Invoice No"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col">
                <label for="inlineFormInputGroup">Customer's Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description of Invoice"
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
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Item Description"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      id="exampleFormControlInput1"
                      placeholder="1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="unitPrice"
                      id="exampleFormControlInput1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="discount"
                      id="exampleFormControlInput1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="amount"
                      id="exampleFormControlInput1"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => alert("deleted")}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.addNewItem()}
            >
              +New Item
            </button>
            <hr />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default InvoiceForm;
