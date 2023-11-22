const mongoose = require("mongoose");

const CampingSchema = new mongoose.Schema(
  {
    available: { type: String, default: true },
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
        "Ourense",
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
    },
    accesibilidad: { type: Boolean, default: false },
    nivel_accesibilidad: { type: Number, enum: [0, 1, 2, 3], default: 0 },
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
      enum: ["playa", "montaña", "ciudad"],
    },
    iframe: {
      type: String,
      trim: true,
      default: "https://maps.app.goo.gl/saYxGa9EkbBPT9rS7",
    },
    bugalow: { type: Boolean, default: true },
    parcela: { type: Boolean, default: true },
    acampada_libre: { type: Boolean, default: true },
    piscina: { type: Boolean, default: true },
    parque_acuatico: { type: Boolean, default: true },
    restaurante: { type: Boolean, default: true },
    tienda: { type: Boolean, default: true },
    mascotas: { type: Boolean, default: true },
    puntuacion: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0,
    },
    zona_infantil: { type: Boolean, default: true },
    imgs: {
      cover: {
        type: String,
        trim: true,
        default:
          "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/cover_iiyy6n.jpg",
      },
      img1: {
        type: String,
        trim: true,
        default:
          "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/img1_ocl00l.jpg",
      },
      img2: {
        type: String,
        trim: true,
        default:
          "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/img2_iezkzj.jpg",
      },
    },
    comentarios: [
      {
        type: mongoose.Types.ObjectId,
        ref: "comentario",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Camping = mongoose.model("camping", CampingSchema);
module.exports = Camping;
