export default function SpinButton({ onSpin, disabled }) {
  return (
    <button
      onClick={onSpin}
      disabled={disabled}
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-xl disabled:opacity-50"
    >
      SPIN
    </button>
  );
}
