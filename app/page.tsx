
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaf4ff",
        color: "#172554",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#1565c0", fontSize: "36px" }}>
        Welcome to My First Next.js App!
      </h1>

      <h2 style={{ color: "#172554", fontSize: "28px" }}>
        My name is Jamaica Baguinda
      </h2>

      <p style={{ fontSize: "20px", color: "#334155" }}>
        BSIT Student
      </p>

      <p style={{ fontSize: "18px", color: "#334155" }}>
        This is my first Next.js application.
      </p>
    </main>
  );
}
