const mongoose = require("mongoose");

const CampingSchema = new mongoose.Schema(
  {
    provincia: {
      type: String,
      trim: true,
      required: true,
      enum: [
        "Álava",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Ávila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ciudad Real",
        "Córdoba",
        "Cuenca",
        "Gerona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa",
        "Huelva",
        "Huesca",
        "Islas Baleares",
        "Jaén",
        "La Coruña",
        "La Rioja",
        "Las Palmas",
        "León",
        "Lérida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra",
        "Orense",
        "Palencia",
        "Pontevedra",
        "Salamanca",
        "Santa Cruz de Tenerife",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya",
        "Zamora",
        "Zaragoza",
      ],
    },
    ciudad: { type: String, trim: true, required: true },
    nombre: { type: String, trim: true, required: true },
    contacto: {
      telefono: {
        type: Number,
        trim: true,
        minlength: [9, "solo se puede 9"],
        maxlength: [9, "solo 9"],
        default: 916744992,
      },
      website: {
        type: String,
        trim: true,
        default: "https://portalentodigital.fundaciononce.es/",
      },
      direccion: {
        type: String,
        trim: true,
        default: "Calle Fray Luis de León nº 11",
      },
      mail: {
        type: String,
        trim: true,
        lowercase: true,
        default: "cursos.portalentodigital@fundaciononce.es",
      },
    },
    accesibilidad: { type: Boolean, default: false },
    nivel_accesibilidad: { type: Number, enum: [1, 2, 3], default: 0 },
    type: {
      visual: {
        adaptado: { type: Boolean, default: false },
        descripcion: {
          type: String,
          trim: true,
          default: " Descripcion del tipo de accesibilidad que ofrece",
        },
      },
      auditivo: {
        adaptado: { type: Boolean, default: false },
        descripcion: {
          type: String,
          trim: true,
          default: " Descripcion del tipo de accesibilidad que ofrece",
        },
      },
      movilidad: {
        adaptado: { type: Boolean, default: false },
        descripcion: {
          type: String,
          trim: true,
          default: " Descripcion del tipo de accesibilidad que ofrece",
        },
      },
    },
    entorno: {
      type: String,
      trim: true,
      required: true,
      enum: ["playa", "montaña"],
    },
    iframe: {
      type: String,
      trim: true,
      default: "https://maps.app.goo.gl/saYxGa9EkbBPT9rS7",
    },
    bugalow: { type: Boolean, default: false },
    parcela: { type: Boolean, default: false },
    acampada_libre: { type: Boolean, default: false },
    piscina: { type: Boolean, default: false },
    parque_acuatico: { type: Boolean, default: false },
    restaurante: { type: Boolean, default: false },
    tienda: { type: Boolean, default: false },
    mascotas: { type: Boolean, default: false },
    puntuacion: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0,
    },
    zona_infantil: { type: Boolean, default: false },
    imgs: {
      cover: {
        type: String,
        trim: true,
        default:
          "https://hips.hearstapps.com/hmg-prod/images/slapen-boom-duitsland-1-1591732953.jpg",
      },
      img1: {
        type: String,
        trim: true,
        default:
          "https://www.espectaculosbcn.com/wp-content/uploads/2019/10/campings-monta%C3%B1a-cerca-barcelona2-1.jpg",
      },
      img2: {
        type: String,
        trim: true,
        default:
          "https://live.staticflickr.com/65535/48366191892_50f8a362eb_o.jpg",
      },
    },
    comentarios: [
      {
        type: mongoose.Types.ObjectId,
        ref: "camping",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Camping = mongoose.model("camping", CampingSchema);
module.exports = Camping;
