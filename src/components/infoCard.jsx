

function InfoCard({  img, title, description }) {
  return (
    <div className="flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl bg-white shadow-[0px_0px_6px_#0000003b] transition">
      <div className="relative flex aspect-square w-full items-center justify-center bg-white">
        <img
          src={img}
          alt="Card  img"
          fill
          quality={90}
          priority
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-lg leading-snug text-gray-700">
          <strong className="font-semibold text-black">{title}</strong>{' '}
          {description}
        </p>
      </div>
    </div>
  )
}

export default function CardSection() {
  const cards = [
    {
       img: '/images/n241.png',

      title: `You Get Nationwide PF & ESIC Support
Without Expanding Your Team.`,
      description: `Whether your employees are remote, in
tier-3 cities, or overseas — we cover
every EPFO in India. Need physical
follow-up at an EPF office? We go there
for you.`,
    },
    {
       img: '/images/n24b.png',

      title: `Your Employees Stop Escalating &
Start Trusting.`,
      description: `When PF problems aren’t resolved, trust
erodes — and so does your employer
brand. We give your employees a clear
epfdesk, real-time ticket tracking, and
actual resolution.`,
    },
    {
       img: '/images/n231.png',

      title: `You Stay 100% Statutory Compliant &
Audit Ready.`,
      description: `EPF rules change often — and noncompliance
hits hard.
We stay updated with every circular,
deadline, and portal update. No more
scrambling during inspections or dealing
with surprise EPFO notices. We
proactively track, document, and store
every action, grievance, and filing.`,
    },
    {
       img: '/images/shield.png',

      title: `A Unified Compliance Partner for Both
EPF & ESIC.`,
      description: `Why juggle vendors when one team can
do it all? EPFDesk takes complete
ownership of your statutory obligations
from PF deductions to ESIC enrollments.`,
    },
  ]

  return (
    <>
      <section className="px-4 py-8 sm:px-6 lg:px-8 my-12 md:my-[120px] lg:my-[120px]">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {cards.map((card, i) => (
              <InfoCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
