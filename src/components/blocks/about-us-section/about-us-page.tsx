import type { ComponentType } from 'react'

import { Badge } from '@/components/ui/badge'

type Stat = {
  icon: ComponentType
  value: string
  description: string[]
}

const AboutUs = ({ stats }: { stats: Stat[] }) => {
  return (
    <section
      id='about-us'
      className='before:bg-muted relative py-8 before:absolute before:inset-0 before:-z-10 before:skew-y-3 sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-5xl flex-col items-center justify-center space-y-4 text-center md:mb-16 lg:mb-12'>
          <Badge variant='outline' className='text-sm font-normal'>
            About Us
          </Badge>
          <h2 className='text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'>Chi siamo</h2>
          <p className='text-muted-foreground text-xl'>
            Maxi Di s.r.l è un operatore italiano nel settore della grande distribuzione, fondato nel 1937. Oggi
            l&apos;azienda opera con una rete di più di 450 punti vendita, distribuiti su un vasto territorio che
            comprende Veneto, Lombardia, Emilia Romagna, Piemonte e Valle d&apos;Aosta. Nel corso degli anni Maxi Di
            s.r.l ha saputo evolversi senza mai perdere di vista i propri valori fondanti. In continua crescita,
            l&apos;azienda investe costantemente nello sviluppo della rete, nell&apos;innovazione tecnologica e nella
            formazione delle persone, per offrire un&apos;esperienza d&apos;acquisto sempre più efficiente e vicina ai
            bisogni dei clienti. Oggi l&apos;azienda può contare su un&apos;estesa rete di punti diretti e affiliati, un
            traguardo che testimonia la solidità della struttura e la fiducia costruita nel tempo con milioni di
            famiglie italiane.
          </p>
          {/*<Button
            size='lg'
            asChild
            className='group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
          >
            <a href='#'>
              Read more
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>*/}
        </div>

        {/* Video player and stats */}
        <div className='relative mb-8 h-full w-full sm:mb-16 lg:mb-24'>
          <img
            src='/images/about-us.jpg'
            alt='About us illustration'
            className='h-full w-full object-cover'
            loading='lazy'
          />

          {/* Stats card overlapping the video section */}
          <div className='bg-background grid gap-10 border p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10'>
            {stats.map((stat, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-2.5 text-center'>
                <div className='flex size-7 items-center justify-center [&>svg]:size-7'>
                  <stat.icon />
                </div>
                <span className='text-2xl font-semibold'>{stat.value}</span>
                <p className='text-muted-foreground text-lg'>
                  {stat.description[0]} <br /> {stat.description[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
