import { config } from '@/data/products';

const LocationSection = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-brand-amber/30">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 gradient-warning rounded-2xl flex items-center justify-center text-3xl text-primary-foreground">
            📍
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-foreground mb-2">Lokasi Kami</h3>
          <p className="text-foreground mb-1">
            <strong>{config.store_address}</strong>
          </p>
          <p className="text-muted-foreground text-sm mb-3">{config.store_address_detail}</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-2 bg-card rounded-xl text-sm font-medium text-brand-amber shadow-sm">
              💰 Ongkir 2.000 Khusus Petemon
            </span>
            <span className="px-4 py-2 bg-card rounded-xl text-sm font-medium text-brand-amber shadow-sm">
              📍 Rp 3.500/km luar Petemon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
