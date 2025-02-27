export async function getWeather(city: string) {
  try {
    //  Revisamos la API Key en las variables de entorno
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) throw new Error("No se encontró la API Key");

    //  Hacemos la petición a la API con la ciudad y calidad de aire
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
    );

    //  Si la respuesta no es correcta, lanzamos error
    if (!response.ok) throw new Error("No se pudo obtener el clima");

    //  Devolvemos los datos en formato JSON
    return await response.json();
  } catch (error) {
    //  En caso de error, lo mostramos en consola y retornamos null
    console.error("Error obteniendo el clima:", error);
    return null;
  }
}
