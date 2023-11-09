import identity from '../../assets/Dragons_brand_2.svg';

function Navbar() {
  return (
    <nav
      className="border border-[rgb(255,255,255,0.08)] text-amber-50 h-[3.5rem] bg-gradient-to-bl from-primary-900/60 to-primary-900/80 z-[100] flex justify-between items-center px-12 fixed w-full backdrop-blur-3xl select-none top-0 left-0"
    >
      <a className="flex relative pt-[6px] text-xl text-amber-50 uppercase select-none" href="https://dragons.divzoon.com">
        <img
          src={identity}
          alt="logo"
          width={100}
        />

      </a>

      <div>
        <a
          href='https://dragons.divzoon.com/Contact'
          className="w-[100px] md:grid hidden place-items-center  h-[44px] border-2 border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary-900 duration-500  rounded-xl hover:scale-95 bg-purple-900/5 select-none"
        >
          Contact US
        </a>
      </div>
    </nav>
  );
}

export default Navbar;