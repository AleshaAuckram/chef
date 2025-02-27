export default function Body() {
    const ingrediants = ["Chicken", "Oregano", "Tomatoes"]

    const ingrediantList = ingrediants.map((ingrediant, index) => (
        <li key={ingrediant}>{ingrediant}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formdata = new FormData(event.currentTarget)
        const newIngrediant = formdata.get("ingrediant")
        ingrediants.push(newIngrediant)
        console.log(ingrediants)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingrediant-form">
                <input 
                type="text" 
                placeholder="e.g. oregano"
                aria-label="Add ingrediant" 
                name="ingrediant"
                />
                <button>Add ingrediant</button>
            </form>
            <ul>
                {ingrediantList}
            </ul>
        </main>
    )
}