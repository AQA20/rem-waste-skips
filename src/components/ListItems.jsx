import List from '@/components/List'
import { useState } from 'react'
import SummaryFooter from '@/components/SummaryFooter'
import clsx from 'clsx'

const ListItems = ({ skips, className }) => {
  const [skipId, setSkipId] = useState(null)
  const skip = skips.find((skip) => skip.id === skipId)
  return (
    <section
      className={clsx('flex flex-wrap justify-center gap-4 max-w-full overflow-hidden px-2 py-5 ', className, {
        'mb-70 md:mb-44': Boolean(skip),
      })}
    >
      {skips.map((skip) => (
        <List
          key={skip.id}
          highlight={`${skip.size} Yards`}
          img={`/images/${skip.size}-yarder-skip.webp`}
          imgAlt={`${skip.size} Yarder Skip`}
          title={`${skip.size} Yard Skip`}
          subtitle={`${skip.hire_period_days} day hire period`}
          price={`£${skip.price_before_vat}`}
          onSelect={() => setSkipId(skip.id)}
          isSelected={skipId === skip.id}
          isAllowedOnTheRoad={skip.allowed_on_road}
          isSuitableForHeavyWaste={skip.allows_heavy_waste}
        />
      ))}

      <SummaryFooter
        className="mt-80 md:mt-44"
        price={`£${skip?.price_before_vat}`}
        period={`${skip?.hire_period_days} day hire period`}
        size={`${skip?.size} Yard Skip`}
        show={Boolean(skip)}
      />
    </section>
  )
}

export default ListItems
