# D OR Agency - Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Una landing page comercial moderna y elegante para D OR Agency, especializada en Facebook Ads y TikTok Ads.

🌐 **[Ver Demo en Vivo](https://tu-usuario.github.io/d-or-agency-landing)**

## 🚀 Características

### ✅ Diseño y UX
- **Diseño premium** con paleta de colores profesional (#0B0B0C, #C9A227)
- **Totalmente responsive** (móvil, tablet, desktop)
- **Animaciones suaves** y micro-interacciones
- **Tipografía profesional** (Playfair Display + Inter)
- **Optimizada para conversión** con CTAs estratégicos

### ✅ Funcionalidades
- **Formulario de contacto** con validación
- **Integración con Calendly** para agendar llamadas
- **Carrusel de testimonios** automático
- **FAQ interactivo** con acordeón
- **Contadores animados** de estadísticas
- **Navegación suave** entre secciones

### ✅ SEO y Performance
- **Meta tags** optimizados
- **Estructura semántica** HTML5
- **Imágenes optimizadas** con lazy loading
- **CSS y JS minificados**
- **Core Web Vitals** optimizado
- **Schema markup** preparado

### ✅ Secciones incluidas
1. **Hero** - Propuesta de valor principal + CTAs
2. **Logos** - Empresas que confían
3. **Servicios** - Facebook Ads, TikTok Ads, UGC, CRO
4. **Beneficios** - Por qué elegir D OR Agency
5. **Casos de éxito** - Resultados reales con métricas
6. **Testimonios** - Reseñas de clientes
7. **Proceso** - 4 pasos metodología
8. **FAQ** - Preguntas frecuentes
9. **Sobre nosotros** - Equipo y estadísticas
10. **Contacto** - Formulario + info contacto
11. **Páginas legales** - Aviso legal, privacidad, cookies

## � Instalación y uso local

### Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/d-or-agency-landing.git
cd d-or-agency-landing
```

### Abrir localmente
```bash
# Opción 1: Servidor HTTP simple con Python
python -m http.server 8000

# Opción 2: Abrir directamente index.html en tu navegador
# Solo arrastra index.html a tu navegador

# Opción 3: Live Server en VS Code
# Instala la extensión Live Server y haz clic derecho > "Open with Live Server"
```

Visita `http://localhost:8000` en tu navegador.

## 🚀 Deploy automático con GitHub Pages

### Activar GitHub Pages:
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main` / Folder: `/ (root)`
5. Save

Tu sitio estará disponible en: `https://tu-usuario.github.io/d-or-agency-landing`

## �📁 Estructura de archivos

```
landing-carlos/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js             # JavaScript funcional
└── legal/
    ├── aviso-legal.html    # Página de aviso legal
    ├── privacidad.html     # Política de privacidad
    └── cookies.html        # Política de cookies
```

## 🌐 Cómo subir a InfinityFree

### Paso 1: Registro en InfinityFree
1. Ve a [InfinityFree.com](https://infinityfree.com/)
2. Haz clic en "Create Account" 
3. Completa el registro con tu email
4. Verifica tu cuenta por email

### Paso 2: Crear cuenta de hosting
1. Inicia sesión en InfinityFree
2. Haz clic en "Create Account"
3. Elige un subdominio (ej: doragency.unaux.com)
4. O conecta tu dominio propio
5. Espera a que se active (1-24 horas)

### Paso 3: Subir archivos

**Opción A: File Manager (Recomendado)**
1. Ve al control panel → File Manager
2. Abre la carpeta `htdocs`
3. Sube todos los archivos:
   - `index.html`
   - Carpeta `css/` con `styles.css`
   - Carpeta `js/` con `main.js`
   - Carpeta `legal/` con las 3 páginas legales
4. Asegúrate que `index.html` esté en la raíz de `htdocs`

**Opción B: FTP**
1. Descarga un cliente FTP (ej: FileZilla)
2. Usa los datos FTP del control panel:
   - Server: ftpupload.net
   - Username: tu_usuario
   - Password: tu_contraseña
3. Conéctate y sube archivos a `/htdocs/`

### Paso 4: Verificar funcionamiento
1. Visita tu dominio (ej: https://doragency.unaux.com)
2. Verifica que:
   - ✅ La página carga correctamente
   - ✅ Los estilos se aplican
   - ✅ Las animaciones funcionan
   - ✅ Los formularios envían datos
   - ✅ Los enlaces legales funcionan
   - ✅ Es responsive en móvil

## ⚙️ Configuración necesaria

> **⚠️ IMPORTANTE**: Antes de subir a producción, debes configurar:

### **📧 Formulario de contacto (Formspree)**
- Regístrate en [formspree.io](https://formspree.io/) 
- Obtén tu Form ID
- Actualiza `action="https://formspree.io/f/YOUR_FORM_ID"` en `index.html`

### **📅 Calendly**  
- Crea tu cuenta en [calendly.com](https://calendly.com/)
- Actualiza las URLs en `js/main.js` e `index.html`

**👉 [Ver guía completa de configuración](CONFIGURACION.md)**

## ⚙️ Personalizaciones opcionales

### 1. Información de contacto
En `index.html`, actualizar:
```html
<!-- Cambiar datos de contacto -->
<p>cargonza2412@gmail.com</p>
<p>+34 123 456 789</p>
<p>Madrid, España</p>
```

### 2. Integración Calendly
En `js/main.js`, línea 344:
```javascript
// Cambiar por tu URL de Calendly
url: 'https://calendly.com/TU_USUARIO/consulta'
```

### 3. Configurar formulario
Para que el formulario envíe emails reales, necesitas:

**Opción A: Servicio de formularios**
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Getform](https://getform.io/)

**Opción B: Integrar con CRM**
- HubSpot API
- Pipedrive API
- Zapier webhook

### 4. Analytics y píxeles
En `index.html`, agregar antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_GA_MEASUREMENT_ID');
</script>

<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s) {/*Código del pixel de Meta*/}
</script>

<!-- TikTok Pixel -->
<script>
  !function (w, d, t) {/*Código del pixel de TikTok*/}
</script>
```

### 5. Datos legales
Actualizar en las páginas de `/legal/`:
- CIF de la empresa
- Dirección real
- Email de contacto
- Datos del registro mercantil

## 🔧 Optimizaciones adicionales

### Para mejor performance:
1. **Comprimir imágenes** antes de subir
2. **Usar CDN** para librerías externas
3. **Activar cache** en el servidor
4. **Minificar CSS/JS** (opcional)

### Para mejor SEO:
1. **Sitemap.xml** personalizado
2. **Robots.txt** optimizado
3. **Schema markup** implementado
4. **Open Graph** images

## 📱 Compatibilidad

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile Safari** iOS 14+
- ✅ **Chrome Mobile** Android 90+

## 🆘 Soporte

Si tienes problemas:

1. **Errores de carga**: Verifica que todos los archivos estén subidos
2. **CSS no carga**: Revisa rutas relativas en HTML
3. **Formulario no funciona**: Configura integración backend
4. **Calendly no abre**: Actualiza la URL en `main.js`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**D OR Agency**
- Email: cargonza2412@gmail.com
- LinkedIn: [@doragency](https://linkedin.com/company/doragency)
- Web: [doragency.com](https://doragency.com)

## ⭐ Acknowledgments

- Diseño inspirado en las mejores prácticas de SMMA
- Iconos por [Font Awesome](https://fontawesome.com)
- Fuentes por [Google Fonts](https://fonts.google.com)
- Calendario por [Calendly](https://calendly.com)

---

**¡Tu landing page está lista para generar leads! 🚀**

Para cualquier duda sobre la implementación o personalización, no dudes en consultarme.
