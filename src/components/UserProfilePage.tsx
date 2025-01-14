import React, { useState } from 'react';


const UserProfilePage: React.FC = () => {
  const [formData, setFormData] = useState<{ firstName: string; lastName: string; email: string }>({
    firstName: '',
    lastName: '',
    email: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
}

  return (
    <form onSubmit={handleSubmit}>
    <input name="firstName" placeholder="First Name" onChange={handleChange} />
    <input name="lastName" placeholder="Last Name" onChange={handleChange} />
    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
    <button type="submit">Update Profile</button>
</form>
  )
}

export default UserProfilePage