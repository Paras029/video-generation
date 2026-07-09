export const PersonIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 44,
  color = "rgba(255,255,255,0.85)",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7.5" r="4.2" fill={color} />
    <path d="M3.5 21c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8" fill={color} />
  </svg>
);

export const PeopleGroup: React.FC<{ count?: number; color?: string }> = ({
  count = 3,
  color = "rgba(255,255,255,0.85)",
}) => (
  <div style={{ display: "flex", alignItems: "flex-end" }}>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        style={{
          marginLeft: i === 0 ? 0 : -12,
          zIndex: count - i,
          filter: i === 1 ? "brightness(1.15)" : undefined,
        }}
      >
        <PersonIcon size={i === 1 ? 56 : 44} color={color} />
      </div>
    ))}
  </div>
);
