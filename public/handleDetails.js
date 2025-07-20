const deleteBtn = document.getElementById("deleteBtn")
const updateBtn = document.getElementById("updateBtn")
const bodyInput = document.getElementById("body")
const titleInput = document.getElementById("title")

deleteBtn.addEventListener("click", async ()=>{

    const endpoint = `/home/${deleteBtn.dataset.del}`

    const res = await fetch(endpoint, {method: "DELETE"})
    const data = await res.json()
    console.log(data)
    window.location.href = data.redirect
})

updateBtn.addEventListener("click", async ()=>{

    const updatedTitle = titleInput.value
    const updatedBody = bodyInput.value

    const endpoint = `/home/${updateBtn.dataset.up}`

    //headers in put request are important!
    //
    const res = await fetch(endpoint, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"  // ✅ This tells Express you're sending JSON
        },
        body: JSON.stringify({
            updatedTitle,
            updatedBody
        })
    })

    const data = await res.json()
    console.log(data)
    window.location.href = data.redirect
})