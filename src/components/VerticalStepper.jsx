import TickIcon from '@/components/icons/TickIcon'

const steps = [
  'Postcode',
  'Waste Type',
  'Choose Skip',
  'Permit Check',
  'Choose Date',
  'Payment',
]

const VerticalStepper = ({ currentStep = 3, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {steps.map((label, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < currentStep
        const isActive = stepNumber === currentStep

        return (
          <div key={label} className="flex gap-3 min-h-[56px] cursor-pointer">
            {/* Indicator + Line */}
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`
                w-9 h-9 flex items-center justify-center 
                rounded-full border-2 text-lg font-bold
                text-muted-foreground
                  ${
                    isCompleted
                      ? 'bg-primary  border-white text-primary-foreground'
                      : isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'border-gray-300 text-gray-400'
                  }`}
              >
                {isCompleted ? (
                  <TickIcon className="w-4 h-4 text-primary-foreground" />
                ) : (
                  stepNumber
                )}
              </div>

              {/* Line below (only if not last step) */}
              {index !== steps.length - 1 && (
                <div
                  className={`w-px h-[24px] ${
                    isCompleted ? 'bg-foreground' : 'bg-border'
                  }`}
                />
              )}
            </div>

            {/* Step Label - one line, vertically aligned */}
            <div className="flex items-center h-9 whitespace-nowrap text-lg">
              {label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VerticalStepper
