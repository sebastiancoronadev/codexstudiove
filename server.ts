ï»¿import express from "express";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const FORMSUBMIT_EMAIL = "codex.studio.ve@gmail.com";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, details, type } = req.body;

      // Forward to formsubmit as an AJAX post
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name, 
          email,
          phone,
          "Project Type": type,
          details,
          _subject: `New Lead: ${type || 'General'}`,
          _captcha: "false"
        })
      });

      const submitData = await formSubmitRes.json();
      
      if (!formSubmitRes.ok) {
        return res.status(500).json({ error: "Form submission failed" });
      }

      res.json({ success: true, message: "Sent successfully" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
