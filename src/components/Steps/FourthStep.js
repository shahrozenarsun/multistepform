import React from 'react'
import Input from '../UI/Input'

const FourthStep = () => {
    return (
        <div>
            <Input
                id={"cardNumber"}
                label={"Card Number"}
                placeholder={"Enter Your Card Number"}
                name={"cardNumber"}
            />
            <Input
                id={"cardMonth"}
                label={"Card Month"}
                placeholder={"Enter Your Card Month"}
                name={"cardMonth"}
            />
            <Input
                id={"cardYear"}
                label={"Card Year"}
                placeholder={"Enter Your Card Year"}
                name={"cardYear"}
            />
        </div>
    )
}

export default FourthStep
