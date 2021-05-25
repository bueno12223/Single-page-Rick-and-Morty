const character = () => {
    const view = `
        <div class="character-inner">
            <article class="character-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Episoios:</h3>
                <h3>staus:</h3>
                <h3>species:</h3>
                <h3>genere:</h3>
                <h3>origin:</h3>
                <h3>Last location:</h3>
            </article>
        </div>
    `
    return view;
}
export default character