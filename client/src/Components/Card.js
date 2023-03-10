export default function Card({ person, handleDelete }) {
  return (
    <div className="card">
      {/* <div className="box"> */}
      <img src={person.img} alt={person.name + "'s photo"} />
      <h1 className="title">{person.name}</h1>
      <p>
        <label>email: </label>
        <a href={"mailto:" + person.email}>{person.email}</a>
      </p>
      <p>
        <label>phone: </label>
        <a href={"tel:" + person.phone}>{person.phone}</a>
      </p>
      <button onClick={() => handleDelete(person.id)}>Delete Card</button>
      {/* </div> */}
    </div>
  );
}
