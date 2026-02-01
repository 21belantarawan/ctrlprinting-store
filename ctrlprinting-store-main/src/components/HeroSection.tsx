import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-12 mb-8 text-primary-foreground">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              🎉 Unit Usaha Karang Taruna Petemon
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Solusi Desain Modern & Percetakan Ramah Kantong
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Cetak dokumen, foto, hingga undangan dengan kualitas premium dan harga bersahabat. Layanan cepat untuk warga Surabaya!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/printing"
                className="px-8 py-4 bg-card text-primary font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all card-hover"
              >
                📋 Layanan Cetak
              </Link>
              <Link 
                to="/design"
                className="px-8 py-4 bg-white/20 text-primary-foreground font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all"
              >
                🎨 Jasa Desain
              </Link>
            </div>
          </div>
          
          {/* Floating Icon */}
          <div className="hidden md:block">
            <div className="floating">
              <div className="w-48 h-48 bg-white/20 rounded-3xl flex items-center justify-center">
                <Printer className="w-24 h-24 text-primary-foreground" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
