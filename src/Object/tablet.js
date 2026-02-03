const tablets = [
  {
    "id": 1,
    "name": "Surface Pro 13\" (LCD)",
    "brand": "Microsoft",
    "price": 999,
    "image": "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/MSZHY00047_B_surface_pro_11th_copilot_pc_13_x_plus_16gb_512gb_dune.jpg",
    "specs": {
      "display": "13\" PixelSense Flow LCD, 120Hz",
      "processor": "Snapdragon X Plus",
      "ram": "16GB LPDDR5x",
      "storage": "512GB SSD",
      "os": "Windows 11 Home"
    }
  },
  {
    "id": 2,
    "name": "iPad Pro 12.9\"",
    "brand": "Apple",
    "price": 1099,
    "image": "https://files.ekmcdn.com/buytec1/images/apple-ipad-pro-12.9-wi-fi-256gb-grey-4597-p.jpg",
    "specs": {
      "display": "12.9\" Liquid Retina XDR Mini-LED",
      "processor": "Apple M2 chip",
      "ram": "8GB",
      "storage": "256GB",
      "os": "iPadOS"
    }
  },
  {
    "id": 3,
    "name": "iPad Air 11\"",
    "brand": "Apple",
    "price": 599,
    "image": "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/ipad-air-11-inch-m2.png",
    "specs": {
      "display": "11\" Liquid Retina LCD",
      "processor": "Apple M2 chip",
      "ram": "8GB",
      "storage": "128GB",
      "os": "iPadOS"
    }
  },
  {
    "id": 4,
    "name": "Galaxy Tab S9 Ultra",
    "brand": "Samsung",
    "price": 1199,
    "image": "https://www.firstshop.co.za/cdn/shop/files/sm-x916bzaaafa-tablets-1129558548.jpg?v=1739318688&width=1214",
    "specs": {
      "display": "14.6\" Dynamic AMOLED 2X, 120Hz",
      "processor": "Snapdragon 8 Gen 2",
      "ram": "12GB",
      "storage": "256GB",
      "os": "Android 13"
    }
  },
  {
    "id": 5,
    "name": "Galaxy Tab S9 FE",
    "brand": "Samsung",
    "price": 449,
    "image": "https://i5.walmartimages.com/seo/Samsung-Galaxy-Tab-S9-FE-10-9-Wi-Fi-Tablet-256GB-Android-Gray_a0fbab5c-b1bc-4277-8246-d297e8e46639.add3d091108d482610a35bb8c54aba64.jpeg",
    "specs": {
      "display": "10.9\" IPS LCD, 90Hz",
      "processor": "Exynos 1380",
      "ram": "6GB",
      "storage": "128GB",
      "os": "Android 13"
    }
  },
  {
    "id": 6,
    "name": "Xiaomi Pad 6",
    "brand": "Xiaomi",
    "price": 399,
    "image": "https://m.media-amazon.com/images/I/71xsItn27iL.jpg",
    "specs": {
      "display": "11\" LCD, 144Hz, WQHD+",
      "processor": "Snapdragon 870",
      "ram": "8GB",
      "storage": "128GB",
      "os": "MIUI Pad 14"
    }
  },
  {
    "id": 7,
    "name": "Xiaomi Pad 6 Pro",
    "brand": "Xiaomi",
    "price": 499,
    "image": "https://iprice.ph/wp-content/uploads/sites/5/2025/04/Xiaomi-Pad-6-Pro.webp",
    "specs": {
      "display": "11\" LCD, 144Hz, HDR10+",
      "processor": "Snapdragon 8+ Gen 1",
      "ram": "8GB",
      "storage": "256GB",
      "os": "MIUI Pad 14"
    }
  },
  {
    "id": 8,
    "name": "Lenovo Tab P12 Pro",
    "brand": "Lenovo",
    "price": 699,
    "image": "https://www.tecnoshopping.cl/wp-content/uploads/2025/03/ablet-lenovo-tab-p12-8gb-256gb-ssd-12-00_tecnoshopping.cl_1200x1200.webp",
    "specs": {
      "display": "12.6\" AMOLED, 120Hz",
      "processor": "Snapdragon 870",
      "ram": "8GB",
      "storage": "256GB",
      "os": "Android 11"
    }
  },
  {
    "id": 9,
    "name": "Lenovo Tab M10 Plus",
    "brand": "Lenovo",
    "price": 249,
    "image": "https://www.progresif.com/media/catalog/product/cache/a57e14b7b22013b5665a7323ba2dcb64/l/e/lenovo_just_data_1.png",
    "specs": {
      "display": "10.6\" 2K LCD",
      "processor": "MediaTek Helio G80",
      "ram": "4GB",
      "storage": "64GB",
      "os": "Android 12"
    }
  },
  {
    "id": 10,
    "name": "Huawei MatePad Pro 11",
    "brand": "Huawei",
    "price": 749,
    "image": "https://pointsolution.co.th/wp-content/uploads/2022/11/HUAWEI-MATEPAD-PRO-11-LTE.jpg",
    "specs": {
      "display": "11\" OLED, 120Hz",
      "processor": "Snapdragon 888",
      "ram": "8GB",
      "storage": "256GB",
      "os": "HarmonyOS 3.0"
    }
  },
  {
    "id": 11,
    "name": "Huawei MatePad 11.5",
    "brand": "Huawei",
    "price": 429,
    "image": "https://oodi.com/wp-content/uploads/2024/10/800_800_A052D47BEAB2F16068A151DF3F0299B9mp.png",
    "specs": {
      "display": "11.5\" LCD, 120Hz",
      "processor": "Snapdragon 7 Gen 1",
      "ram": "6GB",
      "storage": "128GB",
      "os": "HarmonyOS 3.1"
    }
  },
  {
    "id": 12,
    "name": "Amazon Fire HD 10",
    "brand": "Amazon",
    "price": 149,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1E2SGHcLKrHDALDhexT-HtzZWwa7o57qJA&s",
    "specs": {
      "display": "10.1\" 1080p Full HD",
      "processor": "Octa-core 2.0 GHz",
      "ram": "3GB",
      "storage": "32GB",
      "os": "Fire OS"
    }
  },
  {
    "id": 13,
    "name": "Google Pixel Tablet",
    "brand": "Google",
    "price": 499,
    "image": "https://www.kimstore.com/cdn/shop/files/google_pixel_tablet_128gb_hazel_3.png?v=1764666664",
    "specs": {
      "display": "10.95\" LCD",
      "processor": "Google Tensor G2",
      "ram": "8GB",
      "storage": "128GB",
      "os": "Android 13"
    }
  },
  {
    "id": 14,
    "name": "OnePlus Pad",
    "brand": "OnePlus",
    "price": 479,
    "image": "https://oasis.opstatics.com/content/dam/oasis/page/2023/pad/pad-specs.png",
    "specs": {
      "display": "11.61\" LCD, 144Hz",
      "processor": "Dimensity 9000",
      "ram": "8GB",
      "storage": "128GB",
      "os": "OxygenOS 13.1"
    }
  },
  {
    "id": 15,
    "name": "Amazon Fire Max 11",
    "brand": "Amazon",
    "price": 229,
    "image": "https://www.albagame.al/cdn/shop/files/136247-1.webp?v=1699353964",
    "specs": {
      "display": "11\" LCD (2000 x 1200)",
      "processor": "Octa-core 2.2 GHz",
      "ram": "4GB",
      "storage": "64GB",
      "os": "Fire OS"
    }
  },
  {
    "id": 16,
    "name": "ASUS ROG Flow Z13",
    "brand": "ASUS",
    "price": 1799,
    "image": "https://dlcdnwebimgs.asus.com/gain/66B2EEC6-B734-4548-AB6F-16E2F3F70EA5/w1000/h732",
    "specs": {
      "display": "13.4\" Nebula Display, 165Hz",
      "processor": "Intel Core i9-13900H",
      "ram": "16GB",
      "storage": "1TB SSD",
      "os": "Windows 11 Pro"
    }
  }
];

export default tablets;