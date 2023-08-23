import "./WorkProject.css";

interface Props {
  icon: React.FC<{ hovered: boolean }>;
  text: string;
  className: string;
  activ: boolean;
}

export const WorldItemProject = ({
  icon: Icon,
  text,
  className,
  activ,
}: Props) => {
  return (
    <div className={`workProject__wrapper ${className}`}>
      <Icon hovered={activ} />
      <p
        className="workProject__item--text"
        style={activ ? { color: "#fff" } : {}}
      >
        {text}
      </p>
    </div>
  );
};
