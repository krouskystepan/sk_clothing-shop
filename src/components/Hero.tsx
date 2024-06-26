import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="mt-8 flex w-full justify-center gap-5 md:min-h-[400px] md:gap-10">
      <div className="flex flex-col items-start gap-5 md:w-1/2">
        <h1 className="mt-10 w-full text-center text-6xl font-bold md:text-left">
          Welcome to SK Clothing shop
        </h1>
        <p className="text-center text-lg md:text-left">
          We are a shop that manufactures and procures everything ourselves. We
          strive for the highest and fastest quality and delivery of our
          products.
        </p>
        <Link href="/products" className="self-center md:self-start">
          <Button variant="default" className="px-7 py-5">
            Shop now
          </Button>
        </Link>
      </div>
      <div className="relative hidden w-1/2 max-w-[400px] overflow-hidden rounded-md md:block">
        <div className="size-full bg-black" />
        <Image
          src="/cover-image.webp"
          fill
          alt="Hero image"
          sizes="(min-width: 980px) 400px, calc(34.44vw + 69px)"
          className="object-cover opacity-80"
        />
      </div>
    </div>
  )
}
