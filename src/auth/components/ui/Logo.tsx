function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="src/assets/logo.png"
        alt="SecurClinic logo"
        className="h-8 w-8 rounded-lg object-contain"
      />
      <span className="text-blue-600 font-bold text-lg tracking-wide">SECURCLINIC</span>
    </div>
  );
}

export default Logo;
