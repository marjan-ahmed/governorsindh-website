interface IButton {
    text: string
}

function Button({text}: IButton) {
  return (
    <div>
        <button className="uppercase text-[16px] text-center bg-primary tracking-widest font-[poppins] text-white outline-none rounded-md w-[21em] sm:w-[12.9em] border-none p-3 py-4 font-semibold transition-transform transform hover:translate-y-1 hover:ease-in z-10">{text}</button>
    </div>
  )
}

export default Button;