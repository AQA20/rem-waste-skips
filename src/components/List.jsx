import clsx from 'clsx'
import { useState } from 'react'
import LoadingIndicator from '@/components/LoadingIndicator'
import CloseIcon from '@/components/icons/CloseIcon'
import TickIcon from '@/components/icons/TickIcon'

const List = ({
  highlight,
  title,
  subtitle,
  price,
  img,
  imgAlt,
  onSelect,
  isSelected,
  isAllowedOnTheRoad,
  isSuitableForHeavyWaste,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <section
      className={clsx(
        'w-full p-6 rounded-[12px] bg-background relative cursor-pointer z-10',
        {
          'outline-[3px] outline-primary': isSelected,
        }
      )}
      onClick={onSelect}
    >
      <section>
        <span
          className="
          bg-success-foreground rounded-[13px] p-2 text-[14px] text-[#15803D] absolute w-22 
          md:w-20 h-8 top-2 left-2 flex items-center justify-center
        "
        >
          {highlight}
        </span>
      </section>
      <section className="flex justify-between">
        <section className="flex items-start gap-4">
          <div className="w-[96px] h-[64px] flex justify-center items-center">
            {!isImageLoaded && <LoadingIndicator />}
            <img
              src={img}
              alt={imgAlt}
              onLoad={() => setIsImageLoaded(true)}
              className={clsx(
                'w-[96px] h-[64px] object-contain rounded-t-[12px]',
                {
                  hidden: !isImageLoaded,
                }
              )}
            />
          </div>
          <section>
            <h3>{title}</h3>
            <p className="text-muted-foreground !text-[14px]">{subtitle}</p>
            <h2 className="text-primary-lighter">{price}</h2>
          </section>
        </section>
        <input
          type="radio"
          name="skip"
          checked={isSelected}
          onChange={onSelect}
          className="accent-primary h-6 w-6 cursor-pointer"
        />
      </section>
      <hr className="text-border py-2" />
      {isAllowedOnTheRoad ? (
        <div className="flex items-center gap-2 h-5">
          <TickIcon className="w-[14px] h-[14px] text-[#16A34A]" />
          <div className="text-muted-foreground text-[14px]">
            Allowed on the road
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 h-5">
          <CloseIcon className="w-[14px] h-[14px] text-[#DC2626]" />
          <div className="text-muted-foreground text-[14px]">
            Not allowed on the road
          </div>
        </div>
      )}
      {isSuitableForHeavyWaste ? (
        <div className="flex items-center gap-2 h-5">
          <TickIcon className="w-[14px] h-[14px] text-[#16A34A]" />
          <div className="text-muted-foreground text-[14px]">
            Suitable For Heavy Waste
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 h-5">
          <CloseIcon className="w-[14px] h-[14px] text-[#DC2626]" />
          <div className="text-muted-foreground text-[14px]">
            Not Suitable For Heavy Waste
          </div>
        </div>
      )}
    </section>
  )
}

export default List
