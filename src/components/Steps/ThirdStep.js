import React from 'react'
import Input from '../UI/Input'

const ThirdStep = () => {
    return (
        <div>
            <Input
                id={"address1"}
                label={"Address 1"}
                placeholder={"Enter Your Address 1"}
                name={"address1"}
            />
            <Input
                id={"address2"}
                label={"Address 2"}
                placeholder={"Enter Your Address 2"}
                name={"address2"}
            />
            <Input
                id={"country"}
                label={"Country"}
                placeholder={"Enter Your Country Name"}
                name={"country"}
            />
        </div>
    )
}

export default ThirdStep
