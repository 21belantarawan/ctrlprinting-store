import { Link } from 'react-router-dom';
import { Printer, Palette } from 'lucide-react';

const CategoryCards = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Printing Card */}
        <Link 
          to="/printing"
          className="cursor-pointer bg-card rounded-3xl overflow-hidden shadow-card border border-border card-hover"
        >
          <div className="gradient-success p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Printer className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-primary-foreground">
                <h3 className="text-xl font-bold">Percetakan</h3>
                <p className="opacity-90">File siap cetak</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Print dokumen, foto, stiker, undangan, poster, dan lainnya dengan kualitas premium.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Print BW', 'Print Warna', 'Foto', 'Stiker'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-brand-emerald/10 text-brand-emerald text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Design Card */}
        <Link 
          to="/design"
          className="cursor-pointer bg-card rounded-3xl overflow-hidden shadow-card border border-border card-hover"
        >
          <div className="gradient-secondary p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-primary-foreground">
                <h3 className="text-xl font-bold">Jasa Desain</h3>
                <p className="opacity-90">Desain profesional</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Logo, kartu nama, undangan, poster, feed Instagram, dan berbagai kebutuhan desain lainnya.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Logo', 'Undangan', 'Poster', 'Social Media'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-brand-pink/10 text-brand-pink text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCards;
