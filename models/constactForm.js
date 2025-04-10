const mongoose = require("mongoose");
const Mail = require("nodemailer/lib/mailer");

const contactFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    message :{
        type: String,
        required:  true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
