export default function AssetTypes() {
  const assetTypes = [
    {
      title: "Multi-Family",
      subtitle: "Apartment Complexes",
      description:
        "Professional management of multi-unit residential properties",
      image:
        "https://images.squarespace-cdn.com/content/v1/65ead168a72f9a0dae55ee97/75a4d1de-8c78-4967-9534-865d1b00b78a/EMI_7760+800x600.jpg?format=2500w",
    },
    {
      title: "Mixed-Use",
      subtitle: "Residential + Commercial",
      description:
        "Strategic management combining residential and commercial spaces",
      image:
        "https://images.squarespace-cdn.com/content/v1/65ead168a72f9a0dae55ee97/99444ed4-fe49-47d4-a326-f6558fc70823/562+Exterior++720x850.jpg?format=2500w",
    },
    {
      title: "Single Family Rental",
      subtitle: "Individual Homes",
      description:
        "Comprehensive management of individual residential properties",
      image:
        "https://images.squarespace-cdn.com/content/v1/65ead168a72f9a0dae55ee97/5cb995f8-fff1-4533-bfac-2978249bbd39/AWC_6186a+800x600.jpg?format=2500w",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Asset Types We Operate
            </h2>
          </div>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {assetTypes.map((asset, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full bg-white object-cover group-hover:scale-105 max-sm:h-80 sm:aspect-2/1 lg:aspect-square transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 rounded-lg"></div>

                  {/* Texto sobreposto */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-sm text-white/80 mb-2 font-medium">
                      {asset.subtitle}
                    </h3>
                    <p className="text-white text-lg font-bold leading-tight">
                      {asset.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
