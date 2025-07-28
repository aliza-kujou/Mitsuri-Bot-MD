// Código Creado por Félix OFC https://GitHub.com/mantis-has
// No quites los Créditos
// Se recomienda MakiBaileys para tus proyectos

import { WAMessageStubType } from '@whiskeysockets/baileys'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;
  if (m.chat === "120363416711925079@g.us") return;

  let who = m.messageStubParameters[0];
  let taguser = `@${who.split("@")[0]}`;
  let chat = global.db.data.chats[m.chat];
  let totalMembers = participants.length;
  let date = new Date().toLocaleString("es-ES", { timeZone: "America/Mexico_City" });

  let imagenUrl = 'https://qu.ax/dYhOj.jpg';

  // Frases de bienvenida
  let frasesBienvenida = [
    "Bienvenido/a, esperamos que disfrutes y participes activamente.",
    "¡Un gusto tenerte aquí! No olvides leer la descripción del grupo.",
    "Tu presencia suma, participa y haz nuevos amigos.",
    "Aquí todos aportamos, así que no dudes en compartir tus ideas.",
    "Que este grupo sea un espacio agradable para ti. ¡Bienvenido/a!"
  ];

  // Frases de despedida
  let frasesDespedida = [
    "Te deseamos lo mejor, gracias por haber sido parte.",
    "Siempre serás bienvenido/a si decides regresar.",
    "Éxito en tus nuevos proyectos y caminos.",
    "Nos despedimos, pero aquí siempre tendrás amigos.",
    "Gracias por compartir tu tiempo, hasta pronto."
  ];

  // Selecciona una frase random de bienvenida/despedida
  let fraseRandomBienvenida = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)];
  let fraseRandomDespedida = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)];

  if (chat.welcome) {
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `
━━━─────━━━─── BIENVENIDO/A ━━━─────━━━───
${taguser} se ha unido al grupo: ${groupMetadata.subject}
Miembros: ${totalMembers + 1}
Soy Mitsuri, el bot de todos en este grupo.

${fraseRandomBienvenida}
      `.trim();

      await conn.sendMessage(m.chat, {
        image: { url: imagenUrl },
        caption: bienvenida,
        mentions: [who]
      });
    }

    if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE
    ) {
      let despedida = `
━━━─────━━━─── DESPEDIDA ━━━─────━━━───
${taguser} ha salido del grupo: ${groupMetadata.subject}
Ahora somos ${totalMembers + 1} miembros.

${fraseRandomDespedida}
      `.trim();

      await conn.sendMessage(m.chat, {
        image: { url: imagenUrl },
        caption: despedida,
        mentions: [who]
      });
    }
  }
}
