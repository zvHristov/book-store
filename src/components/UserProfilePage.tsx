import React, { useState } from 'react';
import {
     Grid, 
     Box, 
     Input, 
     Button,
     FormControl,
     FormLabel,
} from "@chakra-ui/core";

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
    <Grid gridRow="1/2" gap={2} className='container'>
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
                    onChange={handleChange}
                    size="sm"
                    variant="flushed"
                />
            </Box>
        </Box>
        <Box textAlign="center">
        <Button 
            type="submit"
            size="md"
            variantColor="blue"
            aria-label="Update Profile"
        >Update Profile</Button>
        </Box>
    </FormControl>
    </Grid>
  )
}

export default UserProfilePage