import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { printingProducts } from '@/data/products';

const filterCategories = [
  { key: 'all', label: 'Semua' },
  { key: 'dokumen', label: 'Dokumen' },
  { key: 'foto', label: 'Foto' },
  { key: 'stiker', label: 'Stiker' },
  { key: 'promo', label: 'Promosi' },
];

const PrintingPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? printingProducts 
    : printingProducts.filter(p => p.category === activeFilter);

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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Layanan Percetakan</h1>
            <p className="text-muted-foreground">File siap cetak dengan kualitas premium</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
          {filterCategories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex-shrink-0 px-5 py-2.5 font-medium rounded-xl transition-all ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} type="printing" />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PrintingPage;
