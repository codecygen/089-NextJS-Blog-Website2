const ContactSubmitHandler = (req, res) => {
    const { email, name, message } = req.body;

    if (req.method === 'POST') {
        if (
            !email ||
            email.includes('@') ||
            !name || name.trim() === '' ||
            !message || message.trim === ''
        ) {
            res.status(422).json({ message: 'Invalud input!' });
            return;
        }
    }

    // Store it in a database
    const newMessage = {
        email, 
        name, 
        message
    }

    console.log(newMessage)

    res.status(201).json({ message: 'Successfully stored message!', sentMessage: newMessage });

};

export default ContactSubmitHandler;