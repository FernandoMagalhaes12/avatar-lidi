import React, { useState, useEffect, useRef } from "react";

const userId = "usuario_unico_123"; // pode usar um UUID ou qualquer id único do usuário

export default function ChatWithCredits() {
  const [messages, setMessages] = useState([
    { from: "system", text: "Olá! Sou a Lidi, sua consultora virtual. Como posso ajudar?" },
  ]);
  const [input, setInput] = useState("");
  const [creditsLeft, setCreditsLeft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Rolar pro fim da conversa automaticamente
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMessage = input.trim();

    setMessages((msgs) => [...msgs, { from: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, message: userMessage }),
      });

      const data = await response.json();

      if (data.redirect) {
        // Créditos acabaram, mostra redirecionamento
        setMessages((msgs) => [
          ...msgs,
          { from: "bot", text: data.response, redirect: data.redirect },
        ]);
        setCreditsLeft(0);
      } else {
        setMessages((msgs) => [...msgs, { from: "bot", text: data.response }]);
        setCreditsLeft(data.creditsLeft);
      }
    } catch (error) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Erro ao conectar com a assistente. Tente novamente." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "auto",
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 8,
          marginBottom: 8,
          border: "1px solid #eee",
          borderRadius: 4,
          background: "#fafafa",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: 12,
              textAlign: m.from === "user" ? "right" : "left",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: m.from === "user" ? "#f0a040" : "#ddd",
                color: m.from === "user" ? "white" : "black",
                padding: "8px 12px",
                borderRadius: 16,
                maxWidth: "80%",
                whiteSpace: "pre-wrap",
              }}
            >
              {m.text}
              {m.redirect && (
                <div style={{ marginTop: 8 }}>
                  <a
                    href={m.redirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0070f3",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Falar com a consultora no WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div>
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem aqui..."
          style={{ width: "100%", resize: "none", padding: 8, borderRadius: 4 }}
          disabled={creditsLeft === 0}
        />
      </div>

      <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={sendMessage}
          disabled={isLoading || creditsLeft === 0 || !input.trim()}
          style={{
            background: "#f97316",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 16px",
            cursor: isLoading || creditsLeft === 0 ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>

        {creditsLeft !== null && (
          <div style={{ alignSelf: "center", fontSize: 14, color: "#888" }}>
            Créditos restantes: {creditsLeft}
          </div>
        )}
      </div>
    </div>
  );
}