import React, { useState } from 'react';
import {
     Grid, 
     Box, 
     Input, 
     Button,
     FormControl,
     FormLabel,
     Text
} from "@chakra-ui/core";
import validator from 'validator';
import { getInitials } from '../common';

const UserProfilePage: React.FC = () => {
  const [formData, setFormData] = useState<{ firstName: string; lastName: string; email: string }>({
    firstName: '',
    lastName: '',
    email: ''
});
const [message, setMessage] = useState<string>("");
const [success, setSuccess] = useState<string>("");

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess("Success submited");
}

const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    const newEmail = event.target.value;
    if (validator.isEmail(newEmail)) {
        setMessage("Valid Email");
        setFormData({
            ...formData,
            email: newEmail
        });
    } else {
        setMessage("Please enter a valid email!");
    }
}

  return (
    <Grid gridRow="1/2" gap={2} className='container'>
    <Box mt={4} p={4} borderWidth="1px" borderRadius="sm" bg="white">
        <Text fontSize="2xl">{getInitials(formData.firstName, formData.lastName)}</Text>
    </Box>
    <FormControl onSubmit={handleSubmit} isRequired>
        <Box p={4}>
            <Box p={1}>
                <FormLabel htmlFor="firstName">Last Name</FormLabel>
                <Input
                    id="firstName"
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={handleChange}
                    size="sm"
                    variant="flushed"
                />
            </Box>
            <Box p={1}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                    id="lastName"
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={handleChange}
                    size="sm"
                    variant="flushed"
                />
            </Box>
            <Box p={1}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                    id="email"
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    onChange={validateEmail}
                    size="sm"
                    variant="flushed"
                />
                <Text>{message !== '' ? message : ''}</Text>
            </Box>
        </Box>
        <Box textAlign="center">
        <Button
            onClick={handleSubmit}
            type="submit"
            size="md"
            variantColor="blue"
            aria-label="Update Profile"
        >Update Profile</Button>
            <Text>{success !== '' ? success : ''}</Text>
        </Box>
    </FormControl>

    </Grid>
  )
}

export default UserProfilePage