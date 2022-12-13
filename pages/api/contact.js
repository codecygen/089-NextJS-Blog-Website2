// Back-End-Posting-Data-to-Database-Error-Handling-Data-Verification

import { MongoClient } from "mongodb";

const contactSubmitHandler = async (req, res) => {
    const { email, name, message } = req.body;
    const mongoAtlasLink = process.env.MONGODB_ATLAS_LINK;


    // Environmental-Variable-Storing-in-next.config.js-File
    // const nextConfigJsEnvVariables = `${process.env.mongodb_username}${process.env.mongodb_password}${process.env.mongodb_clustername}${process.env.mongodb_database}`;

    if (req.method === 'POST') {
        if (
            !email ||
            !email.includes('@') ||
            !name || name.trim() === '' ||
            !message || message.trim === ''
        ) {
            res.status(422).json({ message: 'Invalid input!' });
            return;
        }

        // Store it in a database
        const newMessage = {
            email,
            name,
            message
        }

        let client;

        try {
            client = await MongoClient.connect(mongoAtlasLink);
        } catch (e) {
            res.status(500).json({ message: 'Could not connect to database!' });
            return;
        }

        const db = client.db();

        try {
            const contactCollection = db.collection('contacts');
            const sentDataResult = await contactCollection.insertOne(newMessage);
            newMessage.id = sentDataResult.insertedId;
        } catch (e) {
            res.status(500).json({ message: 'Message storing failed!' })
            return;
        }

        client.close();

        res.status(201).json({ message: 'Successfully stored message!', sentMessage: newMessage });
    }

};

export default contactSubmitHandler;