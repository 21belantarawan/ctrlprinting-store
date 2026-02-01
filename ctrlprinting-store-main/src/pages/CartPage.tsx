import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Trash2, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { config, formatRupiah } from '@/data/products';

const CartPage = () => {
  const { cart, removeFromCart, cartSubtotal } = useCart();
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>('pickup');

  const ongkir = deliveryOption === 'pickup' ? 0 : config.petemon_shipping_promo;
  const grandTotal = cartSubtotal + ongkir;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const items = cart.map(item => 
      `${item.product.type === 'design' ? 'Desain ' : ''}${item.product.name}${item.extras ? ` (${item.extras})` : ''} x${item.qty}`
    ).join('\n');

    const deliveryInfo = deliveryOption === 'pickup' 
      ? '\n\n📍 Pengambilan: Di Toko CTRL+P\nJl. Petemon Barat No. 132, Surabaya'
      : '\n\n🚚 Pengiriman ke: Kelurahan Petemon';

    const message = encodeURIComponent(
      `Halo CTRL+P, saya ingin order online via Web:\n\n${items}\n\nTotal: ${formatRupiah(grandTotal)}${deliveryInfo}\n\nSaya akan transfer segera. Bagaimana cara kirim filenya?`
    );

    window.open(`https://wa.me/${config.whatsapp_number.replace('+', '')}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Keranjang</h1>
            <p className="text-muted-foreground">{cart.length} item</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <div className="bg-card rounded-3xl p-12 shadow-card border border-border text-center">
                <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Keranjang Kosong</h3>
                <p className="text-muted-foreground mb-6">Belum ada item di keranjang Anda</p>
                <Link 
                  to="/printing"
                  className="inline-block px-6 py-3 gradient-primary text-primary-foreground font-bold rounded-xl"
                >
                  Mulai Belanja
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="bg-card rounded-3xl p-6 shadow-card border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.product.type === 'printing' ? 'bg-brand-emerald/10' : 'bg-brand-pink/10'} rounded-xl flex items-center justify-center text-xl`}>
                        {item.product.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          {item.product.type === 'design' ? 'Desain ' : ''}{item.product.name}
                        </h4>
                        {item.extras && (
                          <p className="text-sm text-muted-foreground">+ {item.extras}</p>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="px-3 py-1 bg-secondary rounded-lg">
                      <span className="text-muted-foreground">Qty:</span>{' '}
                      <span className="font-medium">{item.qty}</span>
                    </div>
                    <div className="px-3 py-1 bg-secondary rounded-lg">
                      <span className="text-muted-foreground">Unit:</span>{' '}
                      <span className="font-medium">{formatRupiah(item.unitPrice)}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className={`text-lg font-bold ${item.product.type === 'printing' ? 'text-brand-emerald' : 'text-brand-pink'}`}>
                      {formatRupiah(item.subtotal)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-3xl p-6 shadow-lg border border-border space-y-4">
              <h3 className="font-bold text-lg text-foreground">📦 Ringkasan Pesanan</h3>

              {/* Delivery Options */}
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-secondary rounded-xl cursor-pointer">
                  <input 
                    type="radio" 
                    name="delivery" 
                    value="pickup"
                    checked={deliveryOption === 'pickup'}
                    onChange={() => setDeliveryOption('pickup')}
                    className="w-4 h-4"
                  />
                  <span className="font-medium">🏪 Ambil di Toko (Gratis)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-secondary rounded-xl cursor-pointer">
                  <input 
                    type="radio" 
                    name="delivery" 
                    value="delivery"
                    checked={deliveryOption === 'delivery'}
                    onChange={() => setDeliveryOption('delivery')}
                    className="w-4 h-4"
                  />
                  <span className="font-medium">🚚 Kirim ke Petemon ({formatRupiah(config.petemon_shipping_promo)})</span>
                </label>
              </div>

              <hr className="border-border" />

              <div className="space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatRupiah(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>{deliveryOption === 'pickup' ? 'Ambil di Toko' : 'Ongkir'}</span>
                  <span>{deliveryOption === 'pickup' ? 'GRATIS' : formatRupiah(ongkir)}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">{formatRupiah(grandTotal)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-4 gradient-primary text-primary-foreground font-bold rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                📱 Checkout via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
