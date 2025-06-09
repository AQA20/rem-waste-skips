const steps = 6

const MobileStepper = ({ currentStep = 3, className }) => {
  return (
    <div className={`py-2 ${className} overflow-hidden max-w-full`}>
      <div className="flex justify-between items-center gap-1">
        {Array.from({ length: steps }).map((_, index) => {
          const isCompleted = index < currentStep
          return (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-sm transition-all duration-300
                ${isCompleted ? 'bg-primary' : 'bg-border'}`}
              style={{ minWidth: 0 }}  // allow flex shrinking
            ></div>
          )
        })}
      </div>
    </div>
  )
}


export default MobileStepper
