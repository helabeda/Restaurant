import Image from 'next/image'
import Link from 'next/link'

const Explore = () => {
  return (
    <div className="flexEnd xl:w-10/12 w-11/12 h-auto  pt-5 md:pt-0">
    <h2 className="regular-exp-20  px-3 pt-3 text-title_color">Explore</h2>
    <Link href="/notFoundPage" className="pt-5">
      <Image
        src="/arrow gray.png"
        alt="arrow"
        width={50}
        height={50}
      />
    </Link>
</div>
  )
}

export default Explore