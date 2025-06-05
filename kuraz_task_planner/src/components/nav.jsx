export default function NavBar() {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        🌟 Task Manager
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Home
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Tasks
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          About
        </a>
      </div>
    </div>
  );
}
