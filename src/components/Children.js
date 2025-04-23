export function Children(){
  const author = {
    firstName: "Joanne",
    lastName: "Rowling",
    description: "British author and philanthropist",
    books: [
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
    ],
};
  return(
    <div>
    <h2>{author.firstName} {author.lastName}</h2>
    <p>{author.description}</p>
    <ul>
        <li>{author.books[0]}</li>
        <li>{author.books[1]}</li>
        <li>{author.books[2]}</li>
    </ul>
    <button>Buy {author.firstName}'s books</button>
</div>
      )
}