/* ==========================================================
 * CONFIGURACIÓN — todo lo que cambia va aquí
 * ========================================================== */
const CONFIG = {
  telefono: "+523328740506",            // TODO: confirmar que recibe WhatsApp
  telefonoVisible: "33 2874 0506",
  mensajeWhatsApp: "Hola, quiero reservar una mesa en El Fogón para ___ personas el día ___ a las ___.",
  mensajeDesayuno: "Hola, ¿cuál es el horario y el menú de desayunos de este fin de semana?",
  abre: "14:30",                         // TODO: confirmar (Instagram dice 2:00 pm)
  cierra: "23:30",
  ultimaOrden: "11:00 pm",               // TODO: confirmar con el dueño
  enlaces: {
    didi: "",   // TODO: pegar el enlace de la tienda en DiDi Food (mientras esté vacío, el botón se oculta)
    mapa: "https://www.google.com/maps/dir/?api=1&destination=El+Fog%C3%B3n+Pizza+A+La+Le%C3%B1a&destination_place_id=ChIJ4eXbv-qzKIQRF7A866RTK5M",
    resenasGoogle: "https://www.google.com/maps/place/?q=place_id:ChIJ4eXbv-qzKIQRF7A866RTK5M",
    instagram: "https://www.instagram.com/elfogon.gdl/",
    facebook: "https://www.facebook.com/ElFogonCipriano",
    mapaEmbebido: "https://www.google.com/maps?q=El+Fog%C3%B3n+Pizza+A+La+Le%C3%B1a,+C.+Cipriano+Campos+Alatorre+882,+Guadalajara&output=embed"
  }
};

/* ---------- Enlaces de contacto ---------- */
const wa = (msg) => `https://wa.me/${CONFIG.telefono.replace("+", "")}?text=${encodeURIComponent(msg)}`;
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = wa(a.dataset.wa === "desayuno" ? CONFIG.mensajeDesayuno : CONFIG.mensajeWhatsApp);
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll("[data-tel]").forEach((a) => { a.href = `tel:${CONFIG.telefono}`; });
document.querySelectorAll("[data-cfg-href]").forEach((a) => {
  const url = CONFIG.enlaces[a.dataset.cfgHref];
  if (url) a.href = url;
  else a.hidden = true;
});

/* ---------- Horario ---------- */
const hora12 = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const sufijo = h >= 12 ? "pm" : "am";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${sufijo}`;
};
const rango = `${hora12(CONFIG.abre)} – ${hora12(CONFIG.cierra)}`;
document.querySelectorAll("[data-horario]").forEach((el) => { el.textContent = rango; });
document.querySelectorAll("[data-ultima-orden]").forEach((el) => { el.textContent = CONFIG.ultimaOrden; });

const estadoHoy = document.querySelector("[data-horario-hoy]");
if (estadoHoy) {
  try {
    const partes = new Intl.DateTimeFormat("es-MX", {
      timeZone: "America/Mexico_City", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    const ahora = Number(partes.find((p) => p.type === "hour").value) * 60 + Number(partes.find((p) => p.type === "minute").value);
    const min = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
    if (ahora >= min(CONFIG.abre) && ahora < min(CONFIG.cierra)) {
      estadoHoy.textContent = `Abierto ahora · cierra a las ${hora12(CONFIG.cierra)}`;
    } else if (ahora < min(CONFIG.abre)) {
      estadoHoy.textContent = `Hoy abrimos a las ${hora12(CONFIG.abre)}`;
    } else {
      estadoHoy.textContent = `Mañana abrimos a las ${hora12(CONFIG.abre)}`;
    }
  } catch (e) { /* se queda el texto fijo del HTML */ }
}

/* ---------- Ladrillos del horno (hero) ---------- */
const ladrillos = document.querySelector(".ladrillos");
if (ladrillos) {
  const cx = 200, cy = 200, r1 = 92, r2 = 140;
  let d = "";
  for (let a = 15; a < 180; a += 15) {
    const t = (a * Math.PI) / 180;
    d += `M${(cx + r1 * Math.cos(t)).toFixed(1)} ${(cy - r1 * Math.sin(t)).toFixed(1)} L${(cx + r2 * Math.cos(t)).toFixed(1)} ${(cy - r2 * Math.sin(t)).toFixed(1)} `;
  }
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", d);
  ladrillos.appendChild(p);
}

/* ---------- Menú ---------- */
const pestanas = document.getElementById("pestanas");
const carta = document.getElementById("carta");
const pesos = (n) => `$${n.toLocaleString("es-MX")}`;

function pintarCategoria(cat) {
  carta.innerHTML = "";
  carta.setAttribute("aria-labelledby", `tab-${cat.id}`);
  cat.grupos.forEach((g) => {
    const precios = g.platillos.map((p) => p.precio);
    const iguales = precios.every((p) => p === precios[0]) && precios.length > 2;
    const grupo = document.createElement("div");
    grupo.className = "grupo";
    grupo.innerHTML = `<h3>${g.nombre}${iguales ? `<span>${pesos(precios[0])} c/u</span>` : ""}</h3>`;
    g.platillos.forEach((p) => {
      const item = document.createElement("div");
      item.className = "platillo";
      item.innerHTML = `
        <div class="platillo__fila">
          <span class="platillo__nombre">${p.nombre}${p.firma ? '<span class="sello">Favorita</span>' : ""}</span>
          <span class="platillo__puntos" aria-hidden="true"></span>
          <span class="platillo__precio">${pesos(p.precio)}</span>
        </div>
        ${p.desc ? `<p class="platillo__desc">${p.desc}</p>` : ""}`;
      grupo.appendChild(item);
    });
    carta.appendChild(grupo);
  });
  if (cat.nota) {
    const n = document.createElement("p");
    n.className = "carta__nota";
    n.textContent = cat.nota;
    carta.appendChild(n);
  }
}

function seleccionar(id, enfocar) {
  pestanas.querySelectorAll(".pestana").forEach((b) => {
    const activa = b.dataset.id === id;
    b.setAttribute("aria-selected", activa);
    b.tabIndex = activa ? 0 : -1;
    if (activa && enfocar) b.focus();
  });
  pintarCategoria(window.MENU.find((c) => c.id === id));
}

if (window.MENU && pestanas && carta) {
  window.MENU.forEach((cat) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pestana";
    b.setAttribute("role", "tab");
    b.id = `tab-${cat.id}`;
    b.dataset.id = cat.id;
    b.textContent = cat.nombre;
    b.addEventListener("click", () => seleccionar(cat.id));
    pestanas.appendChild(b);
  });
  pestanas.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const ids = window.MENU.map((c) => c.id);
    const actual = ids.indexOf(pestanas.querySelector('[aria-selected="true"]').dataset.id);
    const sig = (actual + (e.key === "ArrowRight" ? 1 : -1) + ids.length) % ids.length;
    seleccionar(ids[sig], true);
  });
  seleccionar(window.MENU[0].id);
}

/* ---------- Navegación móvil ---------- */
const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
if (navBtn && navLinks) {
  const cerrar = () => { navLinks.classList.remove("abierto"); navBtn.setAttribute("aria-expanded", "false"); };
  navBtn.addEventListener("click", () => {
    const abierto = navLinks.classList.toggle("abierto");
    navBtn.setAttribute("aria-expanded", String(abierto));
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrar));
}

/* ---------- Mapa (se carga solo si la persona lo pide) ---------- */
const btnMapa = document.getElementById("cargar-mapa");
if (btnMapa) {
  btnMapa.addEventListener("click", () => {
    const f = document.createElement("iframe");
    f.src = CONFIG.enlaces.mapaEmbebido;
    f.title = "Mapa de El Fogón Pizza a la Leña";
    f.loading = "lazy";
    f.referrerPolicy = "no-referrer-when-downgrade";
    document.getElementById("mapa").appendChild(f);
    btnMapa.hidden = true;
  });
}

document.getElementById("anio").textContent = new Date().getFullYear();
