export default function SecondaryTab() {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();

  const mainDay = day < 10 ? `0${day}` : day; 
  const mainMonth = month < 10 ? `0${month}` : month; 

  return (
    <nav className="secondary-tab">
      <img className="check-icon" src="./check.png" alt="check_icon_png" />
      <p className="text-sec-nav">{`Last Updated : ${mainDay}-${mainMonth}-${year}`}</p>
      <img className="check-icon" src="./letter-i.png" alt="i-icon" />
      <p className="text-sec-nav">Advertising Disclosure</p>
      <select className='drop-down'>
        <option>Top Relevant</option>
        <option>Most purchased</option>
        <option>Discount</option>
      </select>
    </nav>
  );
}
