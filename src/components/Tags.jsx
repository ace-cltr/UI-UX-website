export default function Tags() {
  // for now I've added dummy data but I can change it based on the
  const dummyTagsData = [
    { name: "Tools" },
    { name: "AWS Builder" },
    { name: "Start Build" },
    { name: "Build Supplies" },
    { name: "Tooling" },
    { name: "Blue Hosting" },
  ];
  return (
    <div className="tags">
      {dummyTagsData.map((data, i) => (
        <TagsElement data={data} key={i} />
      ))}
    </div>
  );
}

function TagsElement({ data }) {
  return (
    <div className="tags-div">
      <p className="tags-div-p">{data.name}</p>
    </div>
  );
}
