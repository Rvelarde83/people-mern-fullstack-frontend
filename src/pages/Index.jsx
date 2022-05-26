import { Link } from "react-router-dom"

export default function Index(props) {

    // const [newForm, setNewForm]= useState({
    //     name:"",
    //     image:"",
    //     title: "",
    // })

    // const handleChange= (event) 

    const loaded = () => {
        return props.people.map((person) => (
            <div key={person._id} className="person">
                <Link to={`/people/${person.id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img src={person.image} alt={person.name} />
                <h3>Title: {person.title} </h3>
            </div>
        ))
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.people ? loaded() : loading()
}