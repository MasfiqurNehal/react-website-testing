export default function Singer({ singer }) {
    return (
        <div>
            <h3>ID: {singer.id}</h3>
            <h>Name: {singer.name}</h>
            <p>Age: {singer.age}</p>
        </div>
    )
}