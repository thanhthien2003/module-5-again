const { useState , useEffect } = require("react");

function Greeting() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event)
    }
    const handleLastNameChange = (event) => {
        setLastName(event)
    }

    useEffect(() => {
        window.localStorage.setItem('firstClassName', firstName);
        window.localStorage.setItem('lastClassName', lastName);
    }, [firstName, lastName])

    return (
        <>
            <input value={firstName} onChange={(event) => handleFirstNameChange(event.target.value)} />
            <br />
            <input value={lastName} onChange={(event) => handleLastNameChange(event.target.value)} />
            <br />
            <p>
                Hello,{' '}
                <span>
                    {firstName} {lastName}
                </span>
            </p>
        </>
    )
}
export default Greeting