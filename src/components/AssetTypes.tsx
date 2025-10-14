export default function AssetTypes() {
  const assetTypes = [
    {
      title: "Multi-Family",
      subtitle: "Apartment Complexes",
      description:
        "Professional management of multi-unit residential properties",
      icon: (
        <svg
          className="w-7 h-7 text-brand-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Mixed-Use",
      subtitle: "Residential + Commercial",
      description:
        "Strategic management combining residential and commercial spaces",
      icon: (
        <svg
          className="w-7 h-7 text-brand-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-18 0l9-4 9 4M3 7h18M5 21V10h14v11M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4"
          />
        </svg>
      ),
    },
    {
      title: "Single Family Rental",
      subtitle: "Individual Homes",
      description:
        "Comprehensive management of individual residential properties",
      icon: (
        <svg
          className="w-7 h-7 text-brand-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl mb-4">
            Asset Types We Operate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized property management services tailored to your investment
            type
          </p>
        </div>

        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {assetTypes.map((asset, index) => (
            <div
              key={index}
              className="group relative w-full bg-gray-50 rounded-2xl p-6 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:p-8 xl:w-1/3 hover:bg-gray-100"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 border border-gray-200">
                {asset.icon}
              </div>
              <h4 className="text-xl font-semibold text-black mb-2 transition-all duration-500">
                {asset.title}
              </h4>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {asset.subtitle}
              </p>
              <p className="text-base text-gray-600 transition-all duration-500 leading-6">
                {asset.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
