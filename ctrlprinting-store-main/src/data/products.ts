export interface PrintingProduct {
  id: string;
  name: string;
  price: number;
  price2sisi?: number;
  priceMax?: number;
  category: string;
  icon: string;
  has2sisi: boolean;
  hasLaminasi: boolean;
  laminasiPrice?: number;
  qtyFixed?: boolean;
  note?: string;
  isUndangan?: boolean;
  undanganOptions?: {
    name: string;
    price: number;
    price2sisi: number;
    desc?: string;
  }[];
}

export interface DesignProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  icon: string;
  digitalOnly: boolean;
  has2sisi: boolean;
  hasLaminasi: boolean;
  printOptions?: {
    type: string;
    price?: number;
    note?: string;
    has2sisi?: boolean;
    price2sisi?: number;
    hasLaminasi?: boolean;
    laminasiPrice?: number;
    printName?: string;
    options?: { name: string; price: number }[];
    undanganOptions?: { name: string; price: number; price2sisi: number }[];
  };
}

export const printingProducts: PrintingProduct[] = [
  { id: 'p1', name: 'Print BW (Hitam Putih)', price: 500, price2sisi: 300, category: 'dokumen', icon: '📄', has2sisi: true, hasLaminasi: false },
  { id: 'p2', name: 'Print Warna (Teks)', price: 700, price2sisi: 400, category: 'dokumen', icon: '📝', has2sisi: true, hasLaminasi: false },
  { id: 'p3', name: 'Print Warna (Gambar)', price: 1000, price2sisi: 600, category: 'dokumen', icon: '🖼️', has2sisi: true, hasLaminasi: false },
  { id: 'p4', name: 'Stiker Kertas A3+', price: 10000, category: 'stiker', icon: '🏷️', has2sisi: false, hasLaminasi: true, laminasiPrice: 3000 },
  { id: 'p5', name: 'Stiker Vinyl A3+', price: 15000, category: 'stiker', icon: '✨', has2sisi: false, hasLaminasi: true, laminasiPrice: 3000 },
  { id: 'p6', name: 'Foto 2R (9 lembar)', price: 10000, category: 'foto', icon: '🖼️', has2sisi: false, hasLaminasi: false },
  { id: 'p7', name: 'Foto 3R/4R (4 lembar)', price: 10000, category: 'foto', icon: '🖼️', has2sisi: false, hasLaminasi: false },
  { id: 'p8', name: 'Foto 5R (2 lembar)', price: 10000, category: 'foto', icon: '📸', has2sisi: false, hasLaminasi: false },
  { id: 'p9', name: 'Foto 6R-10R (1 lembar)', price: 10000, category: 'foto', icon: '🖼️', has2sisi: false, hasLaminasi: false },
  { 
    id: 'p10', 
    name: 'Cetak Undangan A4', 
    price: 500, 
    priceMax: 6000, 
    category: 'promo', 
    icon: '💌', 
    has2sisi: true, 
    hasLaminasi: false, 
    isUndangan: true, 
    undanganOptions: [
      { name: 'Undangan HVS 75 Gsm', price: 500, price2sisi: 300, desc: 'Kertas tipis - Untuk pengajian, tahlilan, syukuran' },
      { name: 'Undangan Carton 160 Gsm', price: 6000, price2sisi: 4000, desc: 'Kertas tebal (2 lembar) - Untuk ulang tahun, khitanan' }
    ]
  },
  { id: 'p16', name: 'Kalender A3+', price: 6000, category: 'promo', icon: '📅', has2sisi: false, hasLaminasi: true, laminasiPrice: 3000 },
  { id: 'p11', name: 'Poster A3+', price: 6000, category: 'promo', icon: '🪧', has2sisi: false, hasLaminasi: true, laminasiPrice: 3000 },
  { id: 'p12', name: 'Sertifikat A4', price: 3000, category: 'promo', icon: '🏆', has2sisi: false, hasLaminasi: true, laminasiPrice: 2000 },
  { id: 'p13', name: 'Kartu Nama (100 lbr)', price: 24000, category: 'promo', icon: '💳', has2sisi: false, hasLaminasi: false, qtyFixed: true },
  { id: 'p14', name: 'Brosur A5', price: 5000, category: 'promo', icon: '📋', has2sisi: true, price2sisi: 2000, hasLaminasi: false, note: '(4 lembar)' },
  { id: 'p15', name: 'Daftar Menu Resto A4', price: 6000, category: 'promo', icon: '🍽️', has2sisi: true, price2sisi: 2000, hasLaminasi: true, laminasiPrice: 3000, note: '(2 lembar)' }
];

export const designProducts: DesignProduct[] = [
  { id: 'd1', name: 'Logo', price: 100000, category: 'bisnis', icon: '✏️', digitalOnly: true, has2sisi: false, hasLaminasi: false },
  { id: 'd2', name: 'Kartu Nama', price: 25000, category: 'bisnis', icon: '💳', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'kartu-nama', 
    price: 24000, 
    note: '(100 lembar)',
    has2sisi: false,
    hasLaminasi: false,
    printName: 'Cetak di CTRL+P - Kartu Nama'
  } },
  { id: 'd3', name: 'Stiker Kemasan', price: 50000, category: 'bisnis', icon: '🏷️', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'stiker-kemasan', 
    options: [
      { name: 'Cetak Stiker Kertas A3+', price: 10000 },
      { name: 'Cetak Stiker Vinyl A3+', price: 15000 }
    ], 
    hasLaminasi: true,
    laminasiPrice: 3000
  } },
  { id: 'd4', name: 'Menu Resto', price: 50000, category: 'bisnis', icon: '📋', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'menu-resto', 
    price: 6000, 
    note: '(2 lembar A4)', 
    has2sisi: true, 
    price2sisi: 2000,
    hasLaminasi: true,
    laminasiPrice: 3000 
  } },
  { id: 'd5', name: 'Sertifikat', price: 20000, category: 'event', icon: '🏆', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'sertifikat', 
    price: 3000, 
    note: '(A4)', 
    has2sisi: false,
    hasLaminasi: true,
    laminasiPrice: 2000 
  } },
  { id: 'd6', name: 'Kalender', price: 35000, category: 'bisnis', icon: '📅', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'kalender', 
    price: 6000, 
    note: '(A3+)', 
    has2sisi: false,
    hasLaminasi: true,
    laminasiPrice: 3000 
  } },
  { id: 'd7', name: 'Kaos', price: 75000, category: 'digital', icon: '👕', digitalOnly: true, has2sisi: false, hasLaminasi: false },
  { id: 'd8', name: 'Undangan', price: 40000, category: 'event', icon: '💌', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'undangan', 
    price: 500, 
    note: '(A4)', 
    has2sisi: true, 
    price2sisi: 300,
    hasLaminasi: false,
    undanganOptions: [
      { name: 'Undangan HVS 75 Gsm', price: 500, price2sisi: 300 },
      { name: 'Undangan Carton 160 Gsm', price: 6000, price2sisi: 4000 }
    ]
  } },
  { id: 'd9', name: 'Brosur', price: 70000, category: 'bisnis', icon: '📰', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'brosur', 
    price: 5000, 
    note: '(A5, 4 lembar)', 
    has2sisi: true, 
    price2sisi: 2000,
    hasLaminasi: false
  } },
  { id: 'd10', name: 'Poster', price: 40000, category: 'event', icon: '🪧', digitalOnly: false, has2sisi: false, hasLaminasi: false, printOptions: { 
    type: 'poster', 
    price: 6000, 
    note: '(A3+)', 
    has2sisi: false,
    hasLaminasi: true,
    laminasiPrice: 3000 
  } },
  { id: 'd11', name: 'Twibbon', price: 30000, category: 'digital', icon: '🖼️', digitalOnly: true, has2sisi: false, hasLaminasi: false },
  { id: 'd12', name: 'PPT (per slide)', price: 5000, category: 'digital', icon: '📊', digitalOnly: true, has2sisi: false, hasLaminasi: false },
  { id: 'd13', name: 'Feed Instagram', price: 35000, category: 'digital', icon: '📱', digitalOnly: true, has2sisi: false, hasLaminasi: false },
  { id: 'd14', name: 'Banner', price: 50000, category: 'digital', icon: '🎪', digitalOnly: true, has2sisi: false, hasLaminasi: false },
  { id: 'd15', name: 'Redesign AI', price: 50000, category: 'digital', icon: '🤖', digitalOnly: true, has2sisi: false, hasLaminasi: false }
];

export const formatRupiah = (num: number): string => {
  return 'Rp ' + num.toLocaleString('id-ID');
};

export const config = {
  brand_tagline: 'Digital Printing & Design',
  whatsapp_number: '+6289619209448',
  email: 'halo@ctrlprinting.store',
  store_address: 'Jl. Petemon Barat No. 132, Surabaya',
  store_address_detail: 'Gedung Kelurahan Petemon Lantai 2',
  petemon_shipping_promo: 2000,
  standard_shipping_rate: 3500,
  logo_url: 'https://i.imgur.com/7zU5Axs.png'
};
