import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { 
  printingProducts, 
  designProducts, 
  PrintingProduct, 
  DesignProduct, 
  formatRupiah, 
  config 
} from '@/data/products';

const ProductDetailPage = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [qty, setQty] = useState(1);
  const [is2Sisi, setIs2Sisi] = useState(false);
  const [hasLaminasi, setHasLaminasi] = useState(false);
  const [undanganType, setUndanganType] = useState(0);
  const [printAddon, setPrintAddon] = useState(false);

  const isPrinting = type === 'printing';
  const products = isPrinting ? printingProducts : designProducts;
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link to="/" className="text-primary">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const printingProduct = product as PrintingProduct;
  const designProduct = product as DesignProduct;
  const colorClass = isPrinting ? 'brand-emerald' : 'brand-pink';
  const bgClass = isPrinting ? 'bg-brand-emerald/10' : 'bg-brand-pink/10';
  const textClass = isPrinting ? 'text-brand-emerald' : 'text-brand-pink';

  // Calculate price
  let basePrice = product.price;
  let addOnPrice = 0;
  const extras: string[] = [];

  if (isPrinting) {
    if (printingProduct.isUndangan && printingProduct.undanganOptions) {
      basePrice = printingProduct.undanganOptions[undanganType].price;
      if (is2Sisi) {
        addOnPrice += printingProduct.undanganOptions[undanganType].price2sisi;
        extras.push('Cetak 2 Sisi');
      }
    } else {
      if (printingProduct.has2sisi && is2Sisi && printingProduct.price2sisi) {
        addOnPrice += printingProduct.price2sisi;
        extras.push('Cetak 2 Sisi');
      }
    }
    if (printingProduct.hasLaminasi && hasLaminasi && printingProduct.laminasiPrice) {
      addOnPrice += printingProduct.laminasiPrice;
      extras.push('Laminasi');
    }
  } else {
    if (printAddon && designProduct.printOptions) {
      const printOpt = designProduct.printOptions;
      if (printOpt.price) {
        addOnPrice += printOpt.price;
        extras.push('Cetak di CTRL+P');
      }
      if (printOpt.hasLaminasi && hasLaminasi && printOpt.laminasiPrice) {
        addOnPrice += printOpt.laminasiPrice;
        extras.push('Laminasi');
      }
      if (printOpt.has2sisi && is2Sisi && printOpt.price2sisi) {
        addOnPrice += printOpt.price2sisi;
        extras.push('Cetak 2 Sisi');
      }
    }
  }

  const unitPrice = basePrice + addOnPrice;
  const subtotal = unitPrice * qty;

  const handleAddToCart = () => {
    addToCart({
      id: Date.now(),
      product: { ...product, type: isPrinting ? 'printing' : 'design' },
      qty,
      unitPrice,
      extras: extras.join(', '),
      subtotal,
    });
    toast({
      title: "Berhasil!",
      description: "Item ditambahkan ke keranjang",
    });
    navigate('/cart');
  };

  const handleOrderWhatsApp = () => {
    const productName = isPrinting ? product.name : `Desain ${product.name}`;
    const addOnText = extras.length > 0 ? ` (${extras.join(', ')})` : '';
    const message = encodeURIComponent(
      `Halo CTRL+P, saya ingin order online via Web:\n${productName}${addOnText}\nJumlah: ${qty} pcs\nTotal: ${formatRupiah(subtotal)}\n\nSaya akan transfer segera agar bisa langsung ambil di toko. Bagaimana cara kirim filenya?`
    );
    window.open(`https://wa.me/${config.whatsapp_number.replace('+', '')}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 md:pt-24 pb-8 px-4 max-w-7xl mx-auto page-transition">
        <Link 
          to={`/${type}`}
          className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Kembali
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-20 h-20 ${bgClass} rounded-2xl flex items-center justify-center text-4xl`}>
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {isPrinting ? '' : 'Desain '}{product.name}
                  </h2>
                  <p className={`text-2xl font-bold ${textClass}`}>
                    {printingProduct.priceMax 
                      ? `${formatRupiah(product.price)} - ${formatRupiah(printingProduct.priceMax)}` 
                      : formatRupiah(product.price)
                    }
                  </p>
                </div>
              </div>

              {/* Undangan Options */}
              {isPrinting && printingProduct.isUndangan && printingProduct.undanganOptions && (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4">
                  <h4 className="font-bold text-blue-800 mb-3">📄 Pilih Jenis Undangan:</h4>
                  <div className="space-y-2">
                    {printingProduct.undanganOptions.map((opt, idx) => (
                      <label key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-blue-50 transition-colors">
                        <input 
                          type="radio" 
                          name="undangan-type" 
                          value={idx}
                          checked={undanganType === idx}
                          onChange={() => setUndanganType(idx)}
                          className="mt-1" 
                        />
                        <div>
                          <span className="font-medium text-foreground">{opt.name}</span>
                          {opt.desc && <p className="text-sm text-muted-foreground">{opt.desc}</p>}
                          <span className="text-sm font-semibold text-blue-600">
                            Harga: {formatRupiah(opt.price)}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* 2 Sisi Option */}
              {isPrinting && printingProduct.has2sisi && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={is2Sisi}
                      onChange={(e) => setIs2Sisi(e.target.checked)}
                      className="w-4 h-4" 
                    />
                    <span className="font-medium text-amber-800">
                      Cetak 2 Sisi (+{formatRupiah(
                        printingProduct.isUndangan && printingProduct.undanganOptions
                          ? printingProduct.undanganOptions[undanganType].price2sisi
                          : printingProduct.price2sisi || 0
                      )})
                    </span>
                  </label>
                </div>
              )}

              {/* Laminasi Option */}
              {isPrinting && printingProduct.hasLaminasi && (
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={hasLaminasi}
                      onChange={(e) => setHasLaminasi(e.target.checked)}
                      className="w-4 h-4" 
                    />
                    <span className="font-medium text-purple-800">
                      Tambah Laminasi (+{formatRupiah(printingProduct.laminasiPrice || 0)})
                    </span>
                  </label>
                </div>
              )}

              {/* Design Print Options */}
              {!isPrinting && !designProduct.digitalOnly && designProduct.printOptions && (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 mb-4">
                  <h4 className="font-bold text-teal-800 mb-3">🖨️ Opsi Cetak (Optional)</h4>
                  <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-teal-50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={printAddon}
                      onChange={(e) => setPrintAddon(e.target.checked)}
                      className="w-4 h-4" 
                    />
                    <span className="font-medium text-teal-800">
                      Cetak di CTRL+P (+{formatRupiah(designProduct.printOptions.price || 0)})
                    </span>
                  </label>
                  
                  {printAddon && (
                    <div className="mt-3 pl-8 space-y-2">
                      {designProduct.printOptions.has2sisi && (
                        <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={is2Sisi}
                            onChange={(e) => setIs2Sisi(e.target.checked)}
                            className="w-4 h-4" 
                          />
                          <span className="font-medium text-amber-800">
                            Cetak 2 Sisi (+{formatRupiah(designProduct.printOptions.price2sisi || 0)})
                          </span>
                        </label>
                      )}
                      {designProduct.printOptions.hasLaminasi && (
                        <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={hasLaminasi}
                            onChange={(e) => setHasLaminasi(e.target.checked)}
                            className="w-4 h-4" 
                          />
                          <span className="font-medium text-purple-800">
                            Tambah Laminasi (+{formatRupiah(designProduct.printOptions.laminasiPrice || 0)})
                          </span>
                        </label>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Quantity */}
              {isPrinting && !printingProduct.isUndangan && !printingProduct.qtyFixed && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-muted-foreground mb-3">Kuantitas</label>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-12 h-12 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center text-xl font-bold text-muted-foreground"
                    >
                      −
                    </button>
                    <input 
                      type="number" 
                      value={qty}
                      onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 h-12 text-center text-lg font-semibold bg-secondary border border-border rounded-xl"
                    />
                    <button 
                      onClick={() => setQty(qty + 1)}
                      className="w-12 h-12 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center text-xl font-bold text-muted-foreground"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-3xl p-6 shadow-lg border border-border space-y-4">
              <h3 className="font-bold text-lg text-foreground mb-4">📋 Ringkasan</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Harga Dasar</span>
                  <span>{formatRupiah(basePrice)}</span>
                </div>
                {extras.map((extra, idx) => (
                  <div key={idx} className="flex justify-between text-muted-foreground">
                    <span>{extra}</span>
                    <span>+ Termasuk</span>
                  </div>
                ))}
                {isPrinting && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Jumlah</span>
                    <span>x{qty}</span>
                  </div>
                )}
                <hr className="border-border" />
                <div className="flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className={textClass}>{formatRupiah(subtotal)}</span>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className={`w-full py-4 ${isPrinting ? 'gradient-primary' : 'bg-brand-pink hover:bg-brand-pink/90'} text-primary-foreground font-bold rounded-2xl transition-colors flex items-center justify-center gap-2`}
              >
                <ShoppingCart className="w-5 h-5" />
                Tambah ke Keranjang
              </button>
              <button 
                onClick={handleOrderWhatsApp}
                className="w-full py-4 bg-brand-emerald hover:bg-brand-emerald/90 text-primary-foreground font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
