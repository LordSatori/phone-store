const laptop = [
  {
    "id": 1,
    "name": "MacBook Pro 14\" (M5)",
    "brand": "Apple",
    "price": 1599,
    "image": "https://angkormeas.com/wp-content/uploads/2025/11/Macbook-Pro-14-M5.jpg",
    "specs": {
      "cpu": "Apple M5 (12-core)",
      "gpu": "14-core Integrated",
      "ram": "18GB Unified",
      "storage": "512GB SSD",
      "display": "14.2\" Liquid Retina XDR"
    }
  },
  {
    "id": 2,
    "name": "Surface Laptop 7 (13.8\")",
    "brand": "Microsoft",
    "price": 999,
    "image": "https://i5.walmartimages.com/seo/Microsoft-Surface-Laptop-Copilot-PC-13-8-Touchscreen-Snapdragon-X-Plus-Processor-16GB-Memory-256GB-SSD-7th-Edition-Platinum_8e6e0a02-25d3-4bc7-a263-cc109a8c8e24.7d136fbc214783d8159559dfb64f03e9.jpeg",
    "specs": {
      "cpu": "Snapdragon X Plus",
      "gpu": "Qualcomm Adreno",
      "ram": "16GB LPDDR5x",
      "storage": "256GB Gen4 SSD",
      "display": "13.8\" PixelSense Touch"
    }
  },
  {
    "id": 3,
    "name": "Dell XPS 14 (2026 Edition)",
    "brand": "Dell",
    "price": 2050,
    "image": "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/d/_dell_-myshop-pk-1_1_8.jpg",
    "specs": {
      "cpu": "Intel Core Ultra 7 (Series 3)",
      "gpu": "Intel Arc Graphics",
      "ram": "32GB LPDDR5x",
      "storage": "1TB NVMe SSD",
      "display": "14.5\" 3.2K OLED Touch"
    }
  },
  {
    "id": 4,
    "name": "MacBook Air 15\" (M4)",
    "brand": "Apple",
    "price": 999,
    "image": "https://store.storeimages.cdn-apple.com/is/refurb-mba15-m4-midnight-202503",
    "specs": {
      "cpu": "Apple M4 (10-core)",
      "gpu": "10-core Integrated",
      "ram": "16GB Unified",
      "storage": "256GB SSD",
      "display": "15.3\" Liquid Retina"
    }
  },
  {
    "id": 5,
    "name": "ThinkPad X1 Carbon Gen 14",
    "brand": "Lenovo",
    "price": 1849,
    "image": "https://i5.walmartimages.com/seo/Lenovo-ThinkPad-X1-Carbon-Gen-9-Intel-Laptop-14-IPS-vPro-Iris-Xe-Graphics-16GB-512GB_382573a1-0319-47a0-bde0-261a596db484.05890d7f06082ec8c6b785088d63b52b.jpeg",
    "specs": {
      "cpu": "Intel Core Ultra 7 vPro",
      "gpu": "Intel Arc Graphics",
      "ram": "32GB LPDDR5x",
      "storage": "1TB Gen5 SSD",
      "display": "14\" 2.8K OLED"
    }
  },
  {
    "id": 6,
    "name": "Zenbook A16 (Snapdragon X2)",
    "brand": "Asus",
    "price": 1099,
    "image": "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc5/UX3607OA_Product-photo_2B_Iceland-Gray_06.jpg",
    "specs": {
      "cpu": "Snapdragon X2 Elite",
      "gpu": "Qualcomm Adreno Next-Gen",
      "ram": "16GB LPDDR5x",
      "storage": "1TB SSD",
      "display": "16\" 3K OLED"
    }
  },
  {
    "id": 7,
    "name": "Stealth 16 AI+ (RTX 5090)",
    "brand": "MSI",
    "price": 2399,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYsRz52BoiEU9voQtuzPalenbaIcgtbPq1w&s",
    "specs": {
      "cpu": "Intel Core Ultra 9",
      "gpu": "NVIDIA RTX 5090 (16GB)",
      "ram": "64GB DDR5",
      "storage": "2TB Gen5 SSD",
      "display": "16\" 4K Mini-LED"
    }
  },
  {
    "id": 8,
    "name": "OmniBook 5 14\"",
    "brand": "HP",
    "price": 1269,
    "image": "https://m.media-amazon.com/images/I/71llDZsJuDL.jpg",
    "specs": {
      "cpu": "AMD Ryzen AI 9 HX",
      "gpu": "Radeon 890M",
      "ram": "32GB LPDDR5x",
      "storage": "1TB SSD",
      "display": "14\" 2.5K IPS"
    }
  },
  {
    "id": 9,
    "name": "Yoga Slim 7x OLED",
    "brand": "Lenovo",
    "price": 1299,
    "image": "https://www.beckie-khmer.com/storage/products/SlXKLskS4S9K20HA4YagYGLNeMmuUU8UEwfQi32W.jpeg",
    "specs": {
      "cpu": "Snapdragon X Elite",
      "gpu": "Qualcomm Adreno",
      "ram": "32GB LPDDR5x",
      "storage": "1TB SSD",
      "display": "14.5\" 3K OLED Touch"
    }
  },
  {
    "id": 10,
    "name": "Alienware 16X Aurora",
    "brand": "Dell",
    "price": 2099,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-lUNXWEdJlbAkLJb-ag1FDmwpS3ai5iMmg&s",
    "specs": {
      "cpu": "Intel Core Ultra 9",
      "gpu": "NVIDIA RTX 5080",
      "ram": "32GB DDR5",
      "storage": "1TB Gen5 SSD",
      "display": "16\" QHD+, 480Hz"
    }
  },
  {
    "id": 11,
    "name": "Aspire 16 AI",
    "brand": "Acer",
    "price": 575,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IVHtS7pnMJH7VmUD0JPZOqpuWv3HdnhrxQ&s",
    "specs": {
      "cpu": "Intel Core Ultra 5",
      "gpu": "Intel Graphics",
      "ram": "16GB LPDDR5",
      "storage": "512GB SSD",
      "display": "16\" WUXGA IPS"
    }
  },
  {
    "id": 12,
    "name": "LG Gram Pro 17 (Aeronium)",
    "brand": "LG",
    "price": 1899,
    "image": "https://m.media-amazon.com/images/I/71eLsCpIkeL.jpg",
    "specs": {
      "cpu": "Intel Core Ultra 7",
      "gpu": "RTX 3050 (Low Power)",
      "ram": "32GB LPDDR5x",
      "storage": "2TB SSD",
      "display": "17\" WQXGA IPS"
    }
  },
  {
    "id": 13,
    "name": "Swift 16 AI (Haptic Pad)",
    "brand": "Acer",
    "price": 1199,
    "image": "https://brightstarcomp.com/cdn/shop/files/q_e33d9bc6-39b6-43b1-8577-01b69134bb1e.png?v=1745225743",
    "specs": {
      "cpu": "Intel Core Ultra 7",
      "gpu": "Intel Arc Graphics",
      "ram": "16GB LPDDR5x",
      "storage": "1TB SSD",
      "display": "16\" 3.2K OLED"
    }
  },
  {
    "id": 14,
    "name": "Razer Blade 14 (2026)",
    "brand": "Razer",
    "price": 1899,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwOhwp7_R-hohMPVwDPqW_tstFvsinpX5mA&s",
    "specs": {
      "cpu": "AMD Ryzen 9 (Next-Gen)",
      "gpu": "NVIDIA RTX 5070",
      "ram": "32GB DDR5",
      "storage": "1TB SSD",
      "display": "14\" QHD+ OLED"
    }
  },
  {
    "id": 15,
    "name": "ROG Zephyrus G16 (OLED)",
    "brand": "Asus",
    "price": 2629,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jBNLN12xJb22Xvl-dV1HwyvzHOd6Nl_haw&s",
    "specs": {
      "cpu": "Intel Core Ultra 9",
      "gpu": "NVIDIA RTX 5080",
      "ram": "32GB LPDDR5X",
      "storage": "2TB SSD",
      "display": "16\" 2.5K OLED"
    }
  },
  {
    "id": 16,
    "name": "Galaxy Book 6 Pro 360",
    "brand": "Samsung",
    "price": 1449,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvrg-xGEY1Xtla9qF6ERI2tI_INQ76e-bRQ&s",
    "specs": {
      "cpu": "Intel Core Ultra 7",
      "gpu": "Intel Graphics",
      "ram": "16GB LPDDR5x",
      "storage": "512GB SSD",
      "display": "16\" AMOLED 2X Touch"
    }
  }
];

export default laptop;