import BannerBurguer from '../assets/banner.jpg'

const hours = new Date()

const isOpen = hours.getHours() >= 13 && hours.getHours() <= 21 ? <p className='text-white bg-green-600 p-2 rounded-md'>Seg à Sex - 13h às 21h</p> : <p className='text-white bg-red-600 p-2 rounded-md'>Seg à Sex - 13h às 21h</p>

const Header = () => {
  return (
    <>
        <header className="w-full h-auto ">
        <nav className="w-full bg-gray-800  p-5 flex justify-center max-sm:hidden ">
            <div className="text-white font-bold text-4xl"><span className="text-yellow-400 font-bold">Arthur</span>Burguer</div>
           
        </nav>
        <section className="w-full h-[420px] gap-2 bg-home bg-cover bg-center flex flex-col text-center items-center justify-center">
            <img src={BannerBurguer} alt="" className='w-36 h-36 rounded-full' />
        <div className="text-white bg-gray-800 p-2 rounded-lg font-bold text-3xl block md:hidden"><span className="text-yellow-400 font-bold">Arthur</span>Burguer</div>
        <address className='text-white font-semibold text-lg'>Rua do Sucesso 626, Fortaleza - CE</address>
        {isOpen}
        </section>
        </header>
    
    </>
)
}

export default Header