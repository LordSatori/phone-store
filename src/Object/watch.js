const watch = [
  {
    "id": 1,
    "name": "Apple Watch Series 11 (GPS)",
    "brand": "Apple",
    "price": 399,
    "image": "https://mac-center.com.pe/cdn/shop/files/IMG-18077343_m_jpeg_1_bea8676b-990e-4b25-bf01-a8d1fea773da_533x.jpg?v=1757449905",
    "specs": {
      "display": "1.9\" Always-On Retina OLED",
      "chip": "S11 SiP with Neural Engine",
      "battery": "Up to 24 hours",
      "features": "ECG, Blood Oxygen, Blood Glucose Tracking"
    }
  },
  {
    "id": 2,
    "name": "Apple Watch Ultra 3",
    "brand": "Apple",
    "price": 799,
    "image": "https://arystorephone.com/wp-content/uploads/2025/09/apple-watch-ultra3-titanium-black-oceanband-black.jpg",
    "specs": {
      "display": "2.1\" 3000 nits LTPO OLED",
      "chip": "S11 SiP",
      "battery": "Up to 72 hours (Low Power Mode)",
      "features": "Dual-frequency GPS, 100m Water Resistance"
    }
  },
  {
    "id": 3,
    "name": "Apple Watch SE 3",
    "brand": "Apple",
    "price": 249,
    "image": "https://arystorephone.com/wp-content/uploads/2025/09/apple-watch-se3-44mm-aluminum-midnight.jpg",
    "specs": {
      "display": "1.78\" Retina OLED",
      "chip": "S9 SiP",
      "battery": "Up to 18 hours",
      "features": "Fall Detection, Heart Rate, Cycle Tracking"
    }
  },
  {
    "id": 4,
    "name": "Galaxy Watch 8 (40mm)",
    "brand": "Samsung",
    "price": 349,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFN2xnIo_d0N2YZWbshF5-bYKJ7BRnDvmmA&s",
    "specs": {
      "display": "1.3\" Super AMOLED",
      "chip": "Exynos W1100 (3nm)",
      "battery": "Up to 40 hours",
      "features": "BioActive Sensor, Sleep Coaching, Wear OS 6"
    }
  },
  {
    "id": 5,
    "name": "Galaxy Watch 8 Classic",
    "brand": "Samsung",
    "price": 499,
    "image": "https://arystorephone.com/wp-content/uploads/2025/07/Galaxy-Watch-8-Classic-Black-Black-46mm.jpg",
    "specs": {
      "display": "1.5\" Sapphire Crystal AMOLED",
      "chip": "Exynos W1100",
      "battery": "Up to 50 hours",
      "features": "Rotating Bezel, BIA Analysis, Advanced GPS"
    }
  },
  {
    "id": 6,
    "name": "Galaxy Watch Ultra 2",
    "brand": "Samsung",
    "price": 649,
    "image": "https://arystorephone.com/wp-content/uploads/2024/07/galaxy-watch-ultra-titaniumsilver.jpg?v=1764052154",
    "specs": {
      "display": "1.5\" AMOLED, 3000 nits",
      "chip": "Exynos W1100",
      "battery": "Up to 100 hours (Stamina Mode)",
      "features": "Titanium Grade 4, AI Fitness Insights"
    }
  },
  {
    "id": 7,
    "name": "Pixel Watch 4",
    "brand": "Google",
    "price": 349,
    "image": "https://m.media-amazon.com/images/I/71ycpG3LMNL.jpg",
    "specs": {
      "display": "1.2\" Actua Display, 120Hz",
      "chip": "Google Tensor W1",
      "battery": "Up to 24 hours (Always-on)",
      "features": "Fitbit Integration, AI Daily Readiness"
    }
  },
  {
    "id": 8,
    "name": "Pixel Watch 4 XL (45mm)",
    "brand": "Google",
    "price": 399,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT2KrjLKtenBLp0KhoLcFPMN-_nJlcBFRJw&s",
    "specs": {
      "display": "1.45\" Actua Display",
      "chip": "Google Tensor W1",
      "battery": "Up to 36 hours",
      "features": "Advanced Heart Rate, Offline Google Maps"
    }
  },
  {
    "id": 9,
    "name": "Garmin Fenix 8 Pro",
    "brand": "Garmin",
    "price": 1099,
    "image": "https://www.garmin.com.sg/m/sg/g/products/fenix-8-amoled-51-orange-cf-lg.jpg",
    "specs": {
      "display": "1.4\" AMOLED Solar Display",
      "chip": "Multiband GNSS Navigation",
      "battery": "Up to 28 days (Smartwatch Mode)",
      "features": "LED Flashlight, SATIQ Tech, ECG"
    }
  },
  {
    "id": 10,
    "name": "Garmin Venu X1",
    "brand": "Garmin",
    "price": 809,
    "image": "https://res.garmin.com/...",
    "specs": {
      "display": "1.3\" AMOLED Touch",
      "chip": "Garmin Proprietary",
      "battery": "Up to 14 days",
      "features": "On-screen Workouts, Garmin Pay, Voice Assistant"
    }
  },
  {
    "id": 11,
    "name": "Garmin Forerunner 970",
    "brand": "Garmin",
    "price": 599,
    "image": "https://res.garmin.com/...",
    "specs": {
      "display": "1.4\" Full Color AMOLED",
      "chip": "Pro Running Dynamic Chip",
      "battery": "Up to 23 days",
      "features": "Training Readiness, Triathlon Mode, Solar Charging"
    }
  },
  {
    "id": 12,
    "name": "OnePlus Watch 3",
    "brand": "OnePlus",
    "price": 350,
    "image": "https://arystorephone.com/wp-content/uploads/2025/06/oneplus-watch-3-black.jpg",
    "specs": {
      "display": "1.43\" AMOLED, 60Hz",
      "chip": "Snapdragon W5 Gen 2",
      "battery": "Up to 100 hours",
      "features": "Dual-Engine Architecture, Wear OS"
    }
  },
  {
    "id": 13,
    "name": "Fitbit Sense 3",
    "brand": "Fitbit",
    "price": 299,
    "image": "https://www.stapletonselectrical.ie/...",
    "specs": {
      "display": "1.58\" AMOLED Touch",
      "chip": "Fitbit Core AI",
      "battery": "Up to 6 days",
      "features": "cEDA Stress Sensor, Skin Temp, Heart Health"
    }
  },
  {
    "id": 14,
    "name": "Xiaomi Watch 3 Pro",
    "brand": "Xiaomi",
    "price": 269,
    "image": "https://www.aliensurface.ro/...",
    "specs": {
      "display": "1.43\" AMOLED, High Res",
      "chip": "HyperOS Wear",
      "battery": "Up to 15 days",
      "features": "5ATM Water Resistance, 150+ Sports Modes"
    }
  },
  {
    "id": 15,
    "name": "Amazfit Bip 6",
    "brand": "Amazfit",
    "price": 68,
    "image": "https://us.amazfit.com/...",
    "specs": {
      "display": "1.91\" Large HD Screen",
      "chip": "Zepp OS 4.0",
      "battery": "Up to 26 days",
      "features": "4 Satellite Systems, Ultra-lightweight"
    }
  },
  {
    "id": 16,
    "name": "CMF Watch Pro 3",
    "brand": "Nothing",
    "price": 79,
    "image": "https://angkormeas.com/wp-content/uploads/2025/08/CMF-Watch-3-Pro-Black.jpg?v=1754993623",
    "specs": {
      "display": "2.0\" AMOLED Display",
      "chip": "Nothing Wear Core",
      "battery": "Up to 13 days",
      "features": "Bluetooth Calling with AI Noise Reduction"
    }
  }
];

export default watch;