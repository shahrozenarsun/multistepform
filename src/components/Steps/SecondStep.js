import React from 'react'
import Input from '../UI/Input'

const SecondStep = () => {
    return (
        <div>
            <Input
                id={"email"}
                label={"E-mail"}
                placeholder={"Enter Your E-mail Address"}
                name={"emailAddress"}
            />
            <Input
                id={"phone-number"}
                label={"Phone Number"}
                placeholder={"Enter Your Phone Number"}
                name={"phoneNumber"}
            />
            <Input
                id={"alternate-phone"}
                label={"Alternate Phone"}
                placeholder={"Enter Your Alternate Phone"}
                name={"alternatePhone"}
            />
        </div>
    )
}

export default SecondStep
