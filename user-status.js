// api/user-status.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email requis' });
    }

    return res.status(200).json({
      plan: 'free',
      questionsUsed: 0,
      questionsRemaining: 2,
      isNew: true
    });

  } catch (error) {
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
