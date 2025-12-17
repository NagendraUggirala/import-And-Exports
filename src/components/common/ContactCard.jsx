// src/components/common/ContactCard.jsx
import React from 'react';

const ContactCard = ({ name, role, email, phone }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{role}</p>
            <p className="text-gray-800"><strong>Email:</strong> {email}</p>
            <p className="text-gray-800"><strong>Phone:</strong> {phone}</p>
        </div>
    );
}
export default ContactCard;