import Image from 'next/image'

export const FigureImage = ({
  src,
  alt,
  className,
  loading = 'lazy',
}: {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}) => {
  return (
    <figure
      className={
        className || 'overflow-hidden rounded-4xl border border-[#EDE0D4] bg-white shadow-xl'
      }>
      <Image
        src={src}
        alt={alt}
        className='h-80 w-full object-cover sm:h-96'
        width={1440}
        height={960}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px'
        loading={loading}
      />
    </figure>
  )
}
