
const PopulerMenuCard = ({item}) => {
    const{title, description, price, brand, thumbnail} = item;
  return (
    <>
       <div className="card w-96 mx-auto bg-base-100 shadow-xl">
  <figure  className="px-10 pt-10">
    <img  src={thumbnail} alt="Shoes"  className="rounded-xl max-h-40"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary ">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default PopulerMenuCard