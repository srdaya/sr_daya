
import React from 'react';

interface DetailItemProps {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  fullWidth?: boolean;
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value, fullWidth = false }) => {
  return (
    <div className={`flex items-start ${fullWidth ? 'md:col-span-2' : ''}`}>
      {icon && <span className="mr-3 mt-1 flex-shrink-0">{icon}</span>}
      <div>
        <span className="font-semibold text-cyan-300 block">{label}:</span>
        <span className="text-slate-200">{value}</span>
      </div>
    </div>
  );
};

export default DetailItem;
