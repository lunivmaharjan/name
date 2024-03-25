function Student(props){
    return(
        <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone Number:  {props.number}</p>
        </div>
        </>
    );
}
export default Student