import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 mb-12">
          
          <div className="max-w-sm">
            <h3 className="serif text-[24px] font-bold text-white mb-[16px]">La Favorita</h3>
            <p className="text-[#A8A29E] font-sans text-[13px] mb-2">Peluquería y belleza en Sabadell</p>
            <p className="text-[#A8A29E] font-sans text-[13px] mb-1">Avinguda Barberà 280, local J, 08203 Sabadell</p>
            <p className="text-[#A8A29E] font-sans text-[13px] mb-1">937 12 15 77</p>
            <p className="text-[#A8A29E] font-sans text-[13px]">lafavorita.estilistas@hotmail.com</p>
          </div>

          <div className="flex flex-col space-y-[12px]">
             <Link href="#inicio" className="text-[#A8A29E] text-[13px] hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Inicio</Link>
             <Link href="#servicios" className="text-[#A8A29E] text-[13px] hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Servicios</Link>
             <Link href="#sobre-nosotras" className="text-[#A8A29E] text-[13px] hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Sobre nosotras</Link>
          </div>
          
        </div>

        <div className="h-[60px] border-t border-[#A8A29E]/20 flex flex-col md:flex-row justify-between items-center gap-[16px] text-[11px] text-[#A8A29E]">
          <p>© {new Date().getFullYear()} La Favorita Sabadell · Peluquería y Estilistas</p>
          <div className="flex gap-[20px]">
            <Link href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Aviso legal</Link>
            <Link href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
