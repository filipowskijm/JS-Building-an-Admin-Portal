// Your Code Here
// get all the books
// book title, input, button
// add event listener to save button to make request to update book
// fetch request

async function main() {
    const response = await fetch('http://localhost:3001/listBooks')
    const books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    console.log(book)
    const root = document.getElementById('root')

    const li = document.createElement('li')
    li.textContent = book.title

    const input = document.createElement('input')
    input.value = book.quantity

    const saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'

    saveButton.addEventListener('click', () => {
        const body = {
            id: book.id,
            quantity: input.value
        }

        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    })

    deleteButton.addEventListener('click', () => {
        const body = {
            id: book.id,
            quantity: input.value
        }

        fetch('http://localhost:3001/updateBook', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    })

    li.append(input, saveButton, deleteButton)

    root.appendChild(li)
}

main()