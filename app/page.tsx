import { db } from "../firebaseConfig"; // Importa a conexão que você criou

export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>🚀 Infodudu - Loja Tech</h1>
      <p>O projeto foi reiniciado com sucesso no Windows 10!</p>
      <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Ver Produtos (Firebase Conectado)
      </button>
    </div>
  );
}