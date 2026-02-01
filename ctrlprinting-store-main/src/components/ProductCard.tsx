import { Link } from 'react-router-dom';
import { PrintingProduct, DesignProduct, formatRupiah } from '@/data/products';

interface ProductCardProps {
  product: PrintingProduct | DesignProduct;
  type: 'printing' | 'design';
}

const ProductCard = ({ product, type }: ProductCardProps) => {
  const isPrinting = type === 'printing';
  const colorClass = isPrinting ? 'brand-emerald' : 'brand-pink';
  const bgClass = isPrinting ? 'bg-brand-emerald/10' : 'bg-brand-pink/10';
  const textClass = isPrinting ? 'text-brand-emerald' : 'text-brand-pink';
  const buttonClass = isPrinting 
    ? 'bg-brand-emerald hover:bg-brand-emerald/90' 
    : 'bg-brand-pink hover:bg-brand-pink/90';

  const printingProduct = product as PrintingProduct;
  const designProduct = product as DesignProduct;

  return (
    <Link 
      to={`/${type}/${product.id}`}
      className="bg-card rounded-3xl p-6 shadow-card border border-border card-hover cursor-pointer block"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 ${bgClass} rounded-2xl flex items-center justify-center text-2xl`}>
          {product.icon}
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`px-3 py-1 ${bgClass} ${textClass} text-xs font-medium rounded-full capitalize`}>
            {product.category}
          </span>
          {!isPrinting && designProduct.digitalOnly && (
            <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded-full">
              Digital Only
            </span>
          )}
        </div>
      </div>
      <h3 className="font-bold text-foreground mb-1">
        {type === 'design' ? 'Desain ' : ''}{product.name}
      </h3>
      {isPrinting && printingProduct.note && (
        <p className="text-sm text-muted-foreground mb-2">{printingProduct.note}</p>
      )}
      {!isPrinting && !designProduct.digitalOnly && (
        <p className="text-sm text-muted-foreground mb-2">+ Opsi cetak tersedia</p>
      )}
      <div className="flex items-center justify-between mt-3">
        <span className={`text-xl font-bold ${textClass}`}>
          {isPrinting && printingProduct.priceMax 
            ? `${formatRupiah(product.price)}-${formatRupiah(printingProduct.priceMax)}` 
            : formatRupiah(product.price)
          }
        </span>
        <span className={`px-4 py-2 ${buttonClass} text-primary-foreground text-sm font-medium rounded-xl transition-colors`}>
          Lihat Detail
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
