# 🔧 Guía de Configuración - D OR Agency

## 📧 **PASO 1: Configurar Formspree (Formulario de contacto)**

### **1.1. Registro en Formspree**
1. Ve a [formspree.io](https://formspree.io/)
2. Haz clic en **"Get Started"**
3. Regístrate con tu email: `cargonza2412@gmail.com`
4. Confirma tu email

### **1.2. Crear formulario**
1. En tu dashboard, clic en **"New Form"**
2. Nombre del formulario: `D OR Agency - Contacto`
3. Email destino: `cargonza2412@gmail.com`
4. Copia el **Form ID** que te dan (ej: `xpznvoka`)

### **1.3. Actualizar código**
En `index.html`, línea 863, reemplaza:
```html
<!-- CAMBIAR ESTO: -->
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- POR ESTO (con tu Form ID real): -->
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xpznvoka" method="POST">
```

### **1.4. Configuración opcional en Formspree**
- **Subject Line**: "Nuevo lead desde D OR Agency"
- **Reply-To**: Email del usuario
- **Auto-responder**: Mensaje automático de confirmación

---

## 📅 **PASO 2: Configurar Calendly**

### **2.1. Crear cuenta Calendly**
1. Ve a [calendly.com](https://calendly.com/)
2. **Sign Up** con tu email
3. Escoge tu username único (ej: `cargonza2412` o `doragency`)

### **2.2. Crear evento de reunión**
1. **"Create"** → **"One-on-One"**
2. **Nombre**: "Consulta estratégica D OR Agency"
3. **Duración**: 20-30 minutos
4. **Descripción**: 
   ```
   Consulta estratégica gratuita para revisar tu situación actual en Facebook Ads y TikTok Ads.
   
   En esta llamada analizaremos:
   • Tu funnel actual
   • Oportunidades de mejora
   • Estrategia de crecimiento
   • Posible colaboración
   ```
5. **URL personalizada**: `/consulta`

### **2.3. Actualizar código**
En `js/main.js`, línea 171, reemplaza:
```javascript
// CAMBIAR ESTO:
url: 'https://calendly.com/YOUR_CALENDLY_USERNAME/consulta',

// POR ESTO (con tu username real):
url: 'https://calendly.com/cargonza2412/consulta',
```

En `index.html`, línea 1040, reemplaza:
```html
<!-- CAMBIAR ESTO: -->
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_CALENDLY_USERNAME/consulta">

<!-- POR ESTO (con tu username real): -->
<div class="calendly-inline-widget" data-url="https://calendly.com/cargonza2412/consulta">
```

---

## 🧪 **PASO 3: Probar funcionalidad**

### **3.1. Probar formulario**
1. Abre `index.html` en tu navegador
2. Rellena el formulario de contacto
3. Envía y verifica que llega el email a `cargonza2412@gmail.com`

### **3.2. Probar Calendly**
1. Haz clic en **"Agenda una llamada"**
2. Verifica que se abra tu calendario
3. Intenta hacer una reserva de prueba

---

## 📊 **PASO 4: Configurar Analytics (Opcional)**

### **4.1. Google Analytics 4**
1. Ve a [analytics.google.com](https://analytics.google.com/)
2. Crear cuenta y propiedad
3. Copiar **Measurement ID**: `G-XXXXXXXXXX`
4. Añadir antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **4.2. Meta Pixel (Facebook Ads)**
1. Ve a [business.facebook.com](https://business.facebook.com/)
2. Eventos → Píxeles → Crear píxel
3. Copiar código e insertar en `<head>`

### **4.3. TikTok Pixel**
1. Ve a [ads.tiktok.com](https://ads.tiktok.com/)
2. Crear píxel de seguimiento
3. Insertar código en `<head>`

---

## 🌐 **PASO 5: Subir a InfinityFree**

### **5.1. Archivos finales a subir**
```
htdocs/
├── index.html              ← Con Formspree y Calendly configurados
├── css/styles.css          
├── js/main.js             ← Con tu URL de Calendly
└── legal/
    ├── aviso-legal.html
    ├── privacidad.html
    └── cookies.html
```

### **5.2. Verificación final**
✅ Formulario envía emails a tu Gmail
✅ Calendly abre tu calendario
✅ Responsive en móvil
✅ Enlaces funcionan
✅ Páginas legales accesibles

---

## 📧 **Ejemplo de email que recibirás:**

```
Asunto: Nuevo lead desde D OR Agency

De: cargonza2412@gmail.com
Para: cargonza2412@gmail.com

Tienes un nuevo mensaje de contacto:

Nombre: Juan Pérez
Email: juan@empresa.com
Empresa: Mi Tienda Online
Facturación: €10,000 - €50,000
Objetivo: Aumentar ventas online
Web: https://mitienda.com
Mensaje: Hola, me interesa saber más sobre sus servicios de Facebook Ads...

---
Enviado desde D OR Agency Landing Page
```

---

## 🆘 **Solución de problemas**

### **Formulario no funciona:**
- Verificar Form ID de Formspree
- Revisar que el email esté verificado
- Comprobar spam/promociones

### **Calendly no abre:**
- Verificar username correcto
- Confirmar que el evento `/consulta` existe
- Revisar configuración de privacidad

### **Página no carga:**
- Verificar rutas de archivos CSS/JS
- Revisar consola del navegador (F12)
- Confirmar que todos los archivos están subidos

---

**¡Con estas configuraciones tu landing estará 100% funcional! 🚀**
