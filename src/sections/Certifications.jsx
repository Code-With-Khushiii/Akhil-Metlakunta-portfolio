const Certifications = () => {
  const certifications = [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "",
    },
    {
      name: "Power BI Data Analyst (PL-300)",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "",
    },
  ];

  return (
    <section id="certifications" className="c-space section-spacing">
      <h2 className="text-heading">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border border-orange-100 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-xs text-slate-500">Issued: {cert.date}</p>
                )}
                {cert.credentialId && (
                  <p className="text-xs text-slate-500 mt-1">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
              <div className="ml-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

