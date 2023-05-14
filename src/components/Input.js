import React from "react";


export default function Input ({ className, type, placeholder, id, name }) {
    return (
        <input type={type} placeholder={placeholder} id={id} className={className} name={name} />
    );
}