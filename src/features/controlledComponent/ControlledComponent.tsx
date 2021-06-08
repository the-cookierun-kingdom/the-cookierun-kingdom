import React, { useState } from 'react';

export function ControlledComponent() {

  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState(10);

  const handleUserEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value);
  };

  const handleUserAge = (e: React.FormEvent<HTMLInputElement>) => {
    setUserAge(parseInt(e.currentTarget.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={userEmail}
          onChange={handleUserEmail}
          />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          value={userAge}
          onChange={handleUserAge}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}
