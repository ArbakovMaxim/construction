import { useState } from "react";

interface ServiceItemProps {
  icon: React.FC<{ hovered: boolean }>;
  text: string;
  className: string;
}

export function ServiceItem({ icon: Icon, text, className }: ServiceItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`serviceHome__item--fon ${
        hovered ? "hovered" : ""
      } ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon hovered={hovered} />
      <p className="serviceHome__item--text">{text}</p>
    </div>
  );
}
