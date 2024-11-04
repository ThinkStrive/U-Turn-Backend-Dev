import mongoose from "mongoose";

// Define the schema
const VenderSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Full name is required"],
        minlength: [3, "Full name must be at least 3 characters long"],
        maxlength: [30, "Full name can't exceed 100 characters"]
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: [true, "Gender is required"]
    },

    // Date Format => "1995/08/14"
    dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required"],
        validate: {
            validator: function (value) {
                const ageLimit = 18;
                const today = new Date();
                const birthDate = new Date(value);
                const age = today.getFullYear() - birthDate.getFullYear();
                return age >= ageLimit;
            },
            message: "User must be at least 18 years old"
        }
    },
    aadharNumber: {
        type: String,
        required: [true, "Aadhar number is required"],
        unique: true,
        match: [/^\d{12}$/, "Aadhar number must be a 12-digit number"]
    },
    companyName: {
        type: String,
        required: [true, "Company name is required"],
        minlength: [3, "Company name must be at least 3 characters long"],
        maxlength: [50, "Company name can't exceed 100 characters"]
    },
    gst: {
        type: String,
        required: [true, "Please select GST type"],
        enum: ['CGST', 'SCST', 'IGST']
    },
    gstNumber: {
        type: String,
        required: function () { return this.gst; }, //if the gst true required will true 
        match: [/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST number format"],
        message: "GST number is required if GST is true"
    },
    state: {
        type: String,
        required: [true, "State is required"],
        minlength: [2, "State must be at least 2 characters long"]
    },
    pincode: {
        type: String,
        required: [true, "Pincode is required"],
        match: [/^\d{6}$/, "Pincode must be a 6-digit number"]
    }
}, { timestamps: true });


// Creating a Model :
export const Vender = mongoose.model('Vender', VenderSchema);


