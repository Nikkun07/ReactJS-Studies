// On change = Event handler used primarily with form elements
//             ex. <input>, <textarea>, <select>, <radio>
//             Triggers a function evertime the value of the input changes


import React, {useState} from "react";

function OnChange()
{
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function shippingChange(event)
    {
        setShipping(event.target.value);
    }

    function paymentChange(event)
    {
        setPayment(event.target.value);
    }

    function commentChange(event)
    {
        setComment(event.target.value);
    }

    function quantityChange(event)
    {
        setQuantity(event.target.value);
    }

    function handleNameChange(event)
    {
        setName(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={quantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={commentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={paymentChange}>
                <option value={""}>Select an option</option>
                <option value={"Visa"}>Visa</option>
                <option value={"Master Card"}>Master Card</option>
                <option value={"Gift Card"}>Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={shippingChange} />
                Pick Up
            </label> <br />

            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={shippingChange} />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default OnChange;