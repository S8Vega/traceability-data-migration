# traceability-data-migration

### **Taller de AWS con CloudFormation: Migración de Información para Análisis en un Restaurante**

### **Descripción:**

Este taller tiene como objetivo principal la automatización de procesos en un entorno AWS utilizando CloudFormation. Se trabajará con un caso práctico de un restaurante que ya cuenta con una aplicación existente que utiliza una tabla DynamoDB llamada "TRAZABILIDAD" para almacenar registros de seguimiento.

### **Objetivo:**

Automatizar la migración diaria de información desde la tabla DynamoDB hacia un archivo CSV almacenado en un bucket de S3. Esta migración se realizará para facilitar análisis posteriores de la información recolectada por un equipo de ingeniería de datos.

### **Pasos del Taller:**

1. **Creación de una Tabla DynamoDB:**
    - Utilizar CloudFormation para crear la tabla DynamoDB llamada "TRAZABILIDAD" con los campos necesarios (id, fecha, estado, etc.).
    - Los registros deben ser almacenados máximo por una semana.
2. **Creación de un Bucket de S3:**
    - Utilizar CloudFormation para crear un nuevo bucket de S3 que actuará como destino para los archivos CSV generados.
3. **Creación de un Rol de IAM:**
    - Crear un rol de IAM que será utilizado por la Lambda para acceder a la tabla DynamoDB y escribir en el bucket de S3.
4. **Creación de una Lambda Function:**
    - Desarrollar una función Lambda que escanea la tabla DynamoDB, extrae los registros del día y los guarda en un archivo CSV.
    - Configurar la función Lambda para ejecutarse todos los días a las 7 de la noche utilizando un Event Rule.
5. **Empaquetar y Desplegar la Lambda:**
    - Empaquetar el código de la Lambda y subirlo a un bucket de S3.
    - Utilizar CloudFormation para crear la función Lambda y asociarla con el Event Rule.
6. **Creación de una Clave KMS para la Encriptación:**
    - Utilizar CloudFormation para crear una clave de AWS Key Management Service (KMS) que será utilizada para encriptar tanto la tabla DynamoDB como el bucket de S3.
7. **Pruebas y Monitoreo:**
    - Realizar pruebas para asegurarse de que la Lambda se ejecute correctamente todos los días.
    - Almacenar logs generados por la Lambda.

### **Justificación:**

La razón por la cual se necesita migrar la información al bucket de S3 es facilitar análisis posteriores de los datos recopilados en la tabla DynamoDB. Al almacenar los registros en archivos CSV accesibles en S3, se proporciona una solución eficiente para realizar análisis y generar informes analíticos.

### **Notas Adicionales:**

- Personalizar los nombres de los recursos según las convenciones de nomenclatura internas de la empresa o equipo.
- Asegurarse de que la configuración de seguridad, como los permisos del rol IAM, sea coherente con las políticas de seguridad de la empresa.
- Documentar el proceso de implementación y configuración para facilitar futuras actualizaciones o modificaciones.

### **Resultado Esperado:**

Al finalizar el taller, se espera tener un entorno AWS completamente automatizado que realiza la migración diaria de información desde la tabla DynamoDB hacia archivos CSV en un bucket de S3. La información estará cifrada tanto en DynamoDB como en S3 utilizando AWS Key Management Service, proporcionando una capa adicional de seguridad para los datos. Esto permitirá análisis eficientes y efectivos de los datos recolectados.