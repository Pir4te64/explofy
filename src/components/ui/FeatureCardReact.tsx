import React from 'react';

interface FeatureCardReactProps {
  icon: string;
  title: string;
}

const FeatureCardReact: React.FC<FeatureCardReactProps> = ({ icon, title }) => (
  <div className="bg-white rounded-[16px] w-[320px] h-[220px] px-8 py-10 relative shadow-[0_8px_32px_0_rgba(60,60,60,0.10)] flex flex-col items-center justify-center text-center mx-auto">
    <img
      src={icon}
      alt={title}
      className="w-12 h-12 mb-6"
    />
    <h3 className="text-lg font-semibold leading-tight">
      {title}
    </h3>
  </div>
);

export default FeatureCardReact; 