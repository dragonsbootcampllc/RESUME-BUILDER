const Info = (props) => {

  return (
  
    <div className='bg-zinc-300 py-5'>
      <div className='w-3/5 border-2 border-sky-500 p-7 ms-64'>
        <h1 className='text-2xl text-center border-2 border-indigo-200 border-b-indigo-500 pb-5'>personal information</h1>
      <h1 className='text-rose-600 text-xl'>Name : </h1>
      <h2> {props.name}</h2>
      <h1 className='text-rose-600 text-xl'>Job Title : </h1>
      <h2> {props.job}</h2>
      <h1 className='text-rose-600 text-xl'>Age : </h1>
      <h2>{props.age}</h2>
      <h1 className='text-rose-600 text-xl'>Phone : </h1>
      <h2>{props.phone}</h2>
      <h1 className='text-rose-600 text-xl'>Email : </h1>
      <h2>{props.email}</h2>
      <h1 className='text-rose-600 text-xl'>Street : </h1>
      <h2> {props.street}</h2>
      <h1 className='text-rose-600 text-xl'>City : </h1>
      <h2>{props.city}</h2>
      <h1 className='text-rose-600 text-xl'>Country : </h1>
      <h2>{props.country}</h2>
      <h1 className='text-rose-600 text-xl'>About : </h1>
      <h2>{props.about}</h2>
      <h1 className='text-rose-600 text-xl'>Person image : </h1>
      {/* div contain img *****************************/}
      <div className="aspect-square w-[50px] bg-gray-700 rounded-full "> 
        {props.imageUrl && <img src={props.imageUrl} alt="Uploaded_Image" className='w-fill h-fill mt-3' />}
      </div>
     </div>
  </div>
  );
}

export default Info;

