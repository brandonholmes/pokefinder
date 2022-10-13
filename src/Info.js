export default function Info({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data && name ? (
    <p>No Results Found</p>
  ) : (
    <div>
      <h1>Meet {name}</h1>
      <ul>
        <li>Height is {data.height}</li>
        <li>Id is {data.id}</li>
      </ul>
    </div>
  );
} //Need to add Keys to <li> tags
