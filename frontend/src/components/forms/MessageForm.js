import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MessageForm = () => {
    const [formData, setFormData] = useState({})
    const {id} = useParams()
    return (
        <div>MessageForm</div>
    )
}

export default MessageForm