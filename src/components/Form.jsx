function Form({ handleSubmit }) {
    return (
        <form className="form">
            <label for="linkName">Link Name</label>
            <input className="text" type="text" id="linkName" name="linkName" />
            <br />
            <br />
            <label for="URL">Link URL</label>
            <input className="text" type="text" id="linkURL" name="linkURL" />
            <br />
            <br />
            <button type="button" onClick={() => {
                const linkName = document.getElementById('linkName').value
                const url = document.getElementById('linkURL').value
                if (!linkName || !url) {
                    alert('Please fill out whole form')
                    return
                }
                handleSubmit({ name: linkName, URL: url })
            }}>Add Link</button>
        </form>
    )
}

export default Form
