# Bola 8 Compras

PWA móvil para registrar compras y mantener los datos en el navegador mediante IndexedDB.

## Publicación con GitHub Pages
1. En el repositorio, abre **Settings → Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
4. Cuando termine el despliegue, abre la URL HTTPS desde el móvil y usa «Añadir a pantalla de inicio».

## Incluido en esta primera base
- Interfaz adaptable para móvil y modo oscuro.
- PIN de cuatro cifras, bloqueo temporal tras cinco intentos fallidos y recuperación mediante código.
- Catálogo básico de productos y proveedores.
- Una compra pendiente, líneas de compra, cierre con total real y motivo de diferencia.
- Historial, estadísticas iniciales y exportación CSV/JSON.
- Caché de la aplicación mediante service worker.

## Limitaciones conocidas
Esta versión es una **base inicial**, no un sistema contable terminado. La lectura automática OCR de facturas PDF/fotos, la revisión de líneas de factura, la actualización confirmada de precios, los formatos múltiples por producto, la comparación de precios entre proveedores con gráfica, el desglose fiscal validado, los informes XLSX/PDF, la restauración/fusión de copias y los backups automáticos están pendientes.

El formulario de línea permite introducir precios manualmente como solución provisional; eso no cumple el flujo definitivo acordado, en el que los precios deben proceder de facturas importadas y confirmadas. No uses estos cálculos como contabilidad oficial.

El PIN es una barrera de interfaz, no cifrado fuerte de los datos locales. Los datos no se sincronizan y pueden perderse si se borra el almacenamiento del navegador. Exporta copias periódicas.

## Privacidad
Los datos se guardan localmente en el navegador. No se envían a una base de datos remota.
