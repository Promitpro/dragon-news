import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            handleVerifyEmail();
            toast.success('Please verify your email address')
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }

    const handleCheck = (event) => {
        setAccept(event.target.checked);
    }
    const handleVerifyEmail = () => {
        verifyEmail()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheckBox">
                    <Form.Check onClick={handleCheck} type="checkbox" label={<>Accept <Link to='/terms'>Terms & conditions</Link></>}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" disabled={!accept}> 
                    Register
                </Button>
                <Form.Text className="text-danger">
                        {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;