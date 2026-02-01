import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { config } from '@/data/products';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 md:pt-24 pb-8 px-4 max-w-7xl mx-auto page-transition">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-2 hover:bg-secondary rounded-xl transition-colors">
            <ChevronLeft className="w-6 h-6 text-muted-foreground" />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Tentang Kami</h1>
            <p className="text-muted-foreground">CTRL+P Digital Printing & Design</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* About Card */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={config.logo_url} 
                alt="CTRL+P Logo" 
                className="h-16 w-auto"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="text-muted-foreground mb-4">
              CTRL+P adalah inisiatif Karang Taruna Kelurahan Petemon yang bergerak di bidang percetakan digital dan jasa desain grafis. Kami hadir untuk memberikan solusi cetak berkualitas dengan harga yang ramah kantong untuk masyarakat Surabaya.
            </p>
            <p className="text-muted-foreground">
              Dengan peralatan modern dan tim yang berpengalaman, kami siap membantu kebutuhan cetak Anda mulai dari dokumen sederhana hingga material promosi profesional.
            </p>
          </div>

          {/* Payment Info */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Metode Pembayaran</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-semibold text-blue-800 mb-2">🌐 Order Online</h4>
                <p className="text-blue-700 text-sm">
                  Wajib bayar di awal via <strong>QRIS</strong> atau <strong>Transfer BCA</strong>. Validasi sebelum proses cetak.
                </p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl">
                <h4 className="font-semibold text-emerald-800 mb-2">🏪 Pembelian di Toko</h4>
                <p className="text-emerald-700 text-sm">
                  Pembayaran <strong>Cash</strong> untuk pembelian langsung di lokasi.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-semibold text-purple-800 mb-2">🏛️ Layanan B2B</h4>
                <p className="text-purple-700 text-sm">
                  Opsi <strong>Bayar Tempo (Bulanan)</strong> khusus untuk Sekolah & Instansi Pemerintah.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">📞 Kontak & Lokasi</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Alamat</h4>
                  <p className="text-muted-foreground">{config.store_address}</p>
                  <p className="text-muted-foreground text-sm">{config.store_address_detail}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <a 
                    href={`https://wa.me/${config.whatsapp_number.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-emerald hover:text-brand-emerald/80 font-medium"
                  >
                    089619209448
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a 
                    href={`mailto:${config.email}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    {config.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-6 md:p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">🚚 Informasi Pengiriman</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-card rounded-xl">
                <span className="text-2xl">🎉</span>
                <div>
                  <span className="font-semibold text-foreground">Kelurahan Petemon</span>
                  <span className="text-brand-emerald font-bold ml-2">Rp 2.000</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-xl">
                <span className="text-2xl">💰</span>
                <div>
                  <span className="font-semibold text-foreground">Luar Petemon</span>
                  <span className="text-primary font-bold ml-2">Rp 3.500/km</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                * Jarak dihitung dari titik pusat {config.store_address}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
