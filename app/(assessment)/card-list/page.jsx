import styles from "./styles.module.css";
import Card from "./_Card/Card";

export default async function CardList() {
  const result = await fetch(
    `https://random-data-api.com/api/v3/projects/72ef87cc-e774-48dd-ac3a-4d0f00874e4c?api_key=${process.env.RANDOM_API}`
  );
  const { first_name, avatar, book_description } = await result.json();
  return (
    <main className={`${styles.container}`}>
      <Card name={first_name} avatar={avatar} description={book_description} />
      <Card name={first_name} avatar={avatar} description={book_description} />
      <Card name={first_name} avatar={avatar} description={book_description} />
      <Card name={first_name} avatar={avatar} description={book_description} />
      <Card name={first_name} avatar={avatar} description={book_description} />
      <Card name={first_name} avatar={avatar} description={book_description} />
      <Card name={first_name} avatar={avatar} description={book_description} />
    </main>
  );
}
