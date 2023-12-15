import Table from './Table'
import Form from './Form'
import { useEffect, useState } from 'react'

const getLinks = async () => {
    try {
        // make a request = await fetch('/api/links')
        const response = await fetch('http://localhost:3000/api/links')
        //convert the response to json
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
async function addLink(id, name, url) {
    const response = await fetch('http://localhost:3000/api/links', {
        method: 'POST',
        body: JSON.stringify({ id, name, url }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json()
}
async function deleteLink(id) {
    const response = await fetch('http://localhost:3000/api/links/' + id, {
        method: 'DELETE'
    })
    return await response.json()
}
window.deleteLink = deleteLink
window.addLink = addLink

function LinkContainer() {
    const [links, setLinks] = useState([])

    useEffect(() => {
        getLinks().then((links) => {
            console.log('LINKS FROM SERVER', links)
            const updated = []
            for (const link of links) {
                updated[link.id] = {
                    id: link.id,
                    name: link.name,
                    URL: link.url,
                }
            }
            console.log(updated)
            setLinks(updated)
        })
    }, [])

    const handleRemove = (index) => {
        const newLinks = links.filter((v, k) => k !== index)
        setLinks(newLinks)
        deleteLink(index)
    }

    const handleSubmit = (favLink) => {
        console.log('SUBMIT', favLink)
        setLinks(links.concat([favLink]))
        const id = links.length
        addLink(id, favLink.name, favLink.URL)
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
