import React from 'react';

function Alert({ alert }) {
    console.log(alert);
  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type}</strong>: {alert.msg}
      </div>
    )
  );
}

export default Alert;