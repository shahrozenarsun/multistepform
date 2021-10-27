import React from 'react'
import Input from '../UI/Input'

const FirstStep = () => {
    return (
        <div>
            <Input
                id={"first-name"}
                label={"First Name"}
                placeholder={"Enter Your First Name"}
                name={"firstName"}
            />
            <Input
                id={"last-name"}
                label={"Last Name"}
                placeholder={"Enter Your Last Name"}
                name={"lastName"}
            />
            <Input
                id={"nick-name"}
                label={"Nick Name"}
                placeholder={"Enter Your Nick Name"}
                name={"nickName"}
            />
        </div>
    )
}

export default FirstStep
