import identity from '../../assets/Dragons_brand_2.svg';

function Navbar() {
  return (
    <nav
      className="border border-[rgb(255,255,255,0.08)] text-amber-50 h-[3.5rem] bg-gradient-to-bl bg-gray-900 z-[100] flex justify-between items-center px-12 fixed w-full  select-none top-0 left-0"
    >
      <a className="flex relative  " href="https://dragons.divzoon.com">
        <img
          src={identity}
          alt="logo"
          width={100}
        />
<span className={`${'border-2  rounded-lg mx-2  px-2'}  ${"hover:bg-purple-800/20 duration-300 "} `}>DEMO</span>
      </a>

      <div>
        <a
          href='https://dragons.divzoon.com/Contact'
          className=" p-2 px-4 md:grid hidden place-items-center  border-2 border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary-900 duration-500  rounded-xl hover:scale-95 bg-purple-900/5 select-none"
        >
          Contact
        </a>
        
      </div>
    </nav>
  );
}

export default Navbar;