const SpecificationList = ({ specs = {} }) => {
  const specList = Object.entries(specs).map(([key, value]) => ({
    label: key,
    value,
  }));

  return (
    <div>
      <p className="font-bold mb-3">Specifications:</p>

      <ol className="space-y-1">
        {specList.map((spec) => (
          <li key={spec.label} className="text-[#09080F]/60">
            <span className="font-semibold capitalize">
              {spec.label.replace("_", " ")}:
            </span>{" "}
            {spec.value}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SpecificationList;
