import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './PropertyDetails.scss'; // Import the SCSS file

const PropertyDetails = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details">
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <Link to={`/booking/${property.id}`}>Book a Visit</Link>
    </div>
  );
};

export default PropertyDetails;