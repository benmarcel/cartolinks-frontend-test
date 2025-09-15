
"use client";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc?: string;
  buttonLabel?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, buttonLabel }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          {desc && <p className="text-xs text-gray-500">{desc}</p>}
        </div>
      </div>
      {buttonLabel && (
        <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-md">
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default FeatureCard;
