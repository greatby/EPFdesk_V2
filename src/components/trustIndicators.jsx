const TrustIndicators = () => {
  const stats = [
    { label: "Companies Served", value: "5000+" },
    { label: "Filing Accuracy", value: "99.8%" },
    { label: "24/7 Employee Support", value: "Yes" },
    { label: "Employee Records Managed", value: "50L+" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Trusted by <span className="text-blue-600">5000+ Companies</span> Across India
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left sm:text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
