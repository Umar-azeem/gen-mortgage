import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingDown } from 'lucide-react';
 const refinanceOptions = [
    {
      icon: DollarSign,
      title: "Take Cash Out",
      description: "Leverage Investment & use the equity your house has gained over the years",
      features: ["Renovating your home", "Paying down high-interest debt"],
      action: "Use My Equity",
      color: "from-[#F71607] to-[#b31005]",
      bg: "bg-red-50"
    },
    {
      icon: TrendingDown,
      title: "Lower Payment",
      description: "You can improve your financial security by refinancing to a lower payment.",
      features: ["Saving for education", "Planning for retirement"],
      action: "Reduce My Payment",
      color: "from-blue-600 to-blue-800",
      bg: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Short Loan Term",
      description: "Refinance into a shorter term so you can pay off your mortgage sooner.",
      features: ["Reducing amount of interest", "Becoming mortgage free faster"],
      action: "Shorten My Term",
      color: "from-emerald-600 to-emerald-800",
      bg: "bg-emerald-50"
    }
  ];
function plan() {
  return (
    <>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {refinanceOptions.map((option, index) => (
            <div
              key={index}
              className={`group rounded-3xl border border-border bg-card p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${option.bg} hover:border-primary/20`}
            >
              <div className={`inline-flex rounded-2xl bg-gradient-to-r ${option.color} p-3 text-white shadow-lg`}>
                <option.icon className="size-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{option.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
              <ul className="mt-4 space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="size-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                {option.action}
                <ArrowRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    
    </>
  )
}

export default plan