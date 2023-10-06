# Cypress Mocha JUnit Reporter

Este repositorio demuestra cómo configurar Cypress para generar reportes de pruebas automatizadas con `mocha-junit-reporter` y cómo unificar esos reportes XML con `junit-reporter-merger`.

## 🚀 Inicio Rápido

1. **Instalación**

   Asegúrate de tener Node.js y npm instalados. Luego, clona este repositorio e instala las dependencias.

```
git clone [URL-del-repositorio]
cd cypress-mocha-junit-reporter
npm install
```

2. **Ejecutar las Pruebas**

Puedes ejecutar las pruebas de dos formas:

- Modo gráfico:

  ```
  npm run test
  ```

- Modo headless con generación de reportes:

  ```
  npm run regression
  ```

3. **Unificar Reportes**

Después de ejecutar las pruebas en modo headless, tendrás varios archivos XML en el directorio `reports/`. Puedes unificar estos reportes en un solo archivo XML usando:

```
npm run report:xml
```

Esto generará un archivo unificado llamado `regression-report.xml` en el directorio `reports/`.

## 🛠 Configuración

La configuración para Cypress y los reportes están en los siguientes archivos:

- **Configuración de Cypress**: `cypress.config.js`
- **Scripts y Dependencias**: `package.json`

### Detalles de la Configuración

- Se utiliza `mocha-junit-reporter` para generar reportes XML individuales por cada prueba.

- El patrón de nombre de archivo para los reportes XML es `test-[hash].xml`.

- Después de ejecutar las pruebas, se utiliza `junit-reporter-merger` para combinar todos los reportes XML individuales en uno solo.

## 📝 Autor

Daniel Díaz

## ⚖️ Licencia

MIT

---

