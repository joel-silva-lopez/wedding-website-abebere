const BASE_URL = "https://apiwedding-production.up.railway.app/api";

export const apiwedding = {
  async obtenerFamiliaInfo(id) {
    try {
      const response = await fetch(`${BASE_URL}/familias/${id}`);

      return response
    } catch (error) {
      console.error("Error en la solicitud de obtenerFamiliaInfo:", error);
      throw error; // Puedes decidir si deseas relanzar el error o manejarlo de otra manera
    }
  },

  async confirmarInvitacion(id, invitado) {
    try {
      const response = await fetch(`${BASE_URL}/confirmar/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invitado),
      });

      return response
      
    } catch (error) {
      console.error("Error en la solicitud de confirmarInvitacion:", error);
      throw error; // Puedes decidir si deseas relanzar el error o manejarlo de otra manera
    }
  },
};
