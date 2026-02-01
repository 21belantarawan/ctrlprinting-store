const hardware = [
  { icon: '💻', name: 'MacBook Pro M4', desc: 'Design Station' },
  { icon: '🖨️', name: 'Epson L18050', desc: 'Photo Printer A3+' },
  { icon: '🖨️', name: 'Epson L5290', desc: 'All-in-One' },
  { icon: '✂️', name: 'FM 3510 Pro', desc: 'Laminator' },
];

const HardwareSection = () => {
  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">💻 Peralatan Kami</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hardware.map((item, index) => (
          <div key={index} className="text-center p-4 bg-secondary rounded-2xl">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="font-semibold text-foreground">{item.name}</div>
            <div className="text-xs text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardwareSection;
