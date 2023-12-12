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

function LinkContainer() {
    const [links, setLinks] = useState([])

    useEffect(async () => {
        // const links = await getLinks()
        // console.log('LINKS FROM SERVER', links)
        // const updated = links.map((e) => ({
        //     id: e.id,
        //     name: e.name,
        //     URL: e.url,
        // }))
        // console.log(updated)
        setLinks([])
    }, [links])

    const handleRemove = (index) => {
        const newLinks = links.filter((v, k) => k !== index)
        setLinks(newLinks)
    }

    const handleSubmit = (favLink) => {
        console.log('SUBMIT', favLink)
        setLinks(links.concat(favLink))
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