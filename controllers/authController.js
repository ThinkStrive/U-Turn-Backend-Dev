import { Vender } from "../DB/models/venderModel.js"

export const signUp = async (req, res) => {
    try {
        const { fullname, gender, dateOfBirth, aadharNumber, companyName, gst, gstNumber, state, pincode } = req.body

        if (!fullname || !gender || !dateOfBirth || !aadharNumber || !companyName || !gst || !gstNumber || !state || !pincode) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const newVender = new Vender({
            fullname,
            gender,
            dateOfBirth,
            aadharNumber,
            companyName,
            gst,
            gstNumber,
            state,
            pincode
        })

        await newVender.save()

        res.status(201).json({ message: "Vender signed up successfully", data: newVender })
    } catch (error) {
        console.log(`Error in signup controller, ${error.message}`);
        res.status(500).json({ message: error.message })
    }
}