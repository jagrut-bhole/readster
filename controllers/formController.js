const ContactForm = require('../models/constactForm');

module.exports.submitForm_post = (req,res) => {
    const {name,message,username,email} = req.body;

    const newContactForm = new ContactForm({
        name,
        message,
        email,
        username
    });

    newContactForm.save()
    .then(()=> {
        console.log('Form data saved to mongodb');
        res.redirect('/');
    })
    .catch(err => {
        console.log('Error saving the form data:', err);
        res.status(500).redirect('/error');
    })
}