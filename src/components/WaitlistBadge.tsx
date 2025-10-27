import React from 'react';

const Avatar = ({ imageSrc, delay }: { imageSrc: string; delay: number }) => {
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <div 
      className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-border shadow-lg bg-muted"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: `${delay}ms` 
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-5 border-2 border-muted-foreground border-t-foreground rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={imageSrc} 
        alt="User avatar" 
        className="h-full w-full object-cover"
        crossOrigin="anonymous"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          console.error('Image failed to load:', imageSrc);
          e.currentTarget.src = `https://ui-avatars.com/api/?name=User&background=random&size=200`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

const WaitlistBadge = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="inline-flex items-center space-x-3 bg-muted/60 backdrop-blur-sm rounded-full py-3 px-4 text-sm border border-border shadow-xl">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <Avatar key={index} imageSrc={avatar} delay={index * 200} />
          ))}
        </div>
        <p 
          className="text-foreground whitespace-nowrap"
          style={{ 
            animation: 'fadeIn 0.6s ease-out forwards',
            animationDelay: '800ms' 
          }}
        >
          <span className="font-semibold">2.4K</span> currently on the waitlist
        </p>
      </div>
    </>
  );
};

export default WaitlistBadge;
