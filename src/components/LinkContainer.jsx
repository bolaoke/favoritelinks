import Table from './Table'
import Form from './Form'
import { useState } from 'react'

function LinkContainer() {
    const [links, setLinks] = useState([])

    const handleRemove = (index) => {
        const newLinks = links.filter((v, k) => k !== index)
        setLinks(newLinks)
    }

    const handleSubmit = (favLink) => {
        console.log('SUBMIT', favLink)        setLinks(links.concat(favLink))
    }

    return (
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table links={links} handleRemove={handleRemove} />
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    )

}
export default LinkContainer