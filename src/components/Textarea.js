import React from "react";


export default function TextArea ({ className, placeholder, id, name }) {
    return (
        <textarea placeholder={placeholder} id={id} className={className} name={name} />
    );
}