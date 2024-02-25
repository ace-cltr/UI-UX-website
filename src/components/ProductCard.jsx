export default function ProductCard() {
  const dummyData = [
    {
      img: "./gallery.png",
      heading: "This is a custom Title for the Website",
      rating: 4,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iusto doloribus temporibus dignissimos, molestiae adipisci animi ea ipsam enim dolor?",
      mainHighlights:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, vitae, molestiae culpa exercitationem, sit cumque fugiat mollitia quisquam ad accusantium perspiciatis in beatae blanditiis itaque eaque error necessitatibus temporibus ut!",
    },
    {
      img: "./gallery.png",
      heading: "This is a custom Title for the Website",
      rating: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iusto doloribus temporibus dignissimos, molestiae adipisci animi ea ipsam enim dolor?",
      mainHighlights:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, vitae, molestiae culpa exercitationem, sit cumque fugiat mollitia quisquam ad accusantium perspiciatis in beatae blanditiis itaque eaque error necessitatibus temporibus ut!",
    },
    {
      img: "./gallery.png",
      heading: "This is a custom Title for the Website",
      rating: 5,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iusto doloribus temporibus dignissimos, molestiae adipisci animi ea ipsam enim dolor?",
      mainHighlights:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, vitae, molestiae culpa exercitationem, sit cumque fugiat mollitia quisquam ad accusantium perspiciatis in beatae blanditiis itaque eaque error necessitatibus temporibus ut!",
    },
    {
      img: "./gallery.png",
      heading: "This is a custom Title for the Website",
      rating: 4,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iusto doloribus temporibus dignissimos, molestiae adipisci animi ea ipsam enim dolor?",
      mainHighlights:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, vitae, molestiae culpa exercitationem, sit cumque fugiat mollitia quisquam ad accusantium perspiciatis in beatae blanditiis itaque eaque error necessitatibus temporibus ut!",
    },
  ];
  return (
    <div>
      {dummyData.map((data, i) => (
        <ProductDetails data={data} key={i} />
      ))}
    </div>
  );
}

function ProductDetails({ data }) {
  return (
    <div className="product-card">
      <Image size={9} image={data.img} />
      <TextData data={data} />
      <StarRating data={data} />
    </div>
  );
}

function Image({ image, size }) {
  return (
    <img
      style={{ height: `${size}rem`, margin: "15px" }}
      src={image}
      alt={image}
    />
  );
}

function TextData({ data }) {
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <p style={{ margin: 0, color: "#4B5665" }}>
        <strong>{data.heading} -</strong> {data.text}
      </p>
      <p style={{ margin: 0, color: "#4B5665" }}>
        <strong>Main Highlights</strong>
      </p>
      <p style={{ margin: "10px", color: "#4B5665" }}>
        [what you get] : {data.mainHighlights}
      </p>
      <p style={{ color: "#1b88f4", cursor: "pointer" }}>Show more ▼</p>
    </div>
  );
}

function StarRating({ data }) {
  let rating = "";
  if (data.rating === 5) {
    rating = "Amazing";
  } else if (data.rating === 4) {
    rating = "Good";
  } else if (data.rating === 3) {
    rating = "Average";
  } else if (data.rating === 2) {
    rating = "Poor";
  } else if (data.rating === 1) {
    rating = "Bad";
  }

  return (
    <div className="rating-card">
      <div className="star-rating">
        {data.rating}⭐ <span>{rating}</span>
      </div>
      <button className="btn-view">View</button>
    </div>
  );
}
