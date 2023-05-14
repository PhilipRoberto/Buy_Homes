import React from "react";


export default function Label ({ className, type, placeholder, id, name }) {
    return (
        <label type={type} placeholder={placeholder} id={id} className={className} name={name}></label>
    );
}