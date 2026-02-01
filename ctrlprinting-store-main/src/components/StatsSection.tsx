const stats = [
  { icon: '🖨️', value: '500+', label: 'Order/Bulan' },
  { icon: '⭐', value: '4.9', label: 'Rating' },
  { icon: '🚚', value: '154', label: 'Kelurahan' },
  { icon: '💰', value: 'Rp500', label: 'Mulai dari' },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-card rounded-3xl p-6 shadow-card border border-border text-center card-hover cursor-default"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
