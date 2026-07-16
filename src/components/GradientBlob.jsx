const GradientBlob = ({ className = '', size = 'md', color = 'blue' }) => {
  const sizes = {
    sm: 'w-48 h-48 sm:w-64 sm:h-64',
    md: 'w-64 h-64 sm:w-96 sm:h-96',
    lg: 'w-80 h-80 sm:w-[500px] sm:h-[500px]',
    xl: 'w-96 h-96 sm:w-[600px] sm:h-[600px]',
  };

  const colors = {
    blue: 'bg-blue-600/20',
    purple: 'bg-purple-600/20',
    cyan: 'bg-cyan-500/15',
    mixed: 'bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-cyan-500/10',
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl ${sizes[size]} ${colors[color]} animate-blob pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default GradientBlob;
