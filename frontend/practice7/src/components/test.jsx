

function TestPage () {
    return(
        <>
            <h1> This is the test page </h1>
            <form action="/api/newProject" method="POST">
                <input type="text" name="title" placeholder="tile of project"/>
                <input type="text" name="link" placeholder="link of project"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default TestPage;