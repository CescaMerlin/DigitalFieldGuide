exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bird")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("bird").insert([
        {
          commonNameEnglish: "Japanese Scops-Owl",
          commonNameJapanese: "オオコノハズク",
          commonNameRomaji: "ookonohazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Otus semitorques",
          range: "S Kuril Islands and Hokkaido south to Yakushima I.",
        },
        {
          commonNameEnglish: "Elegant Scops-Owl",
          commonNameJapanese: "リュウキュウコノハズク",
          commonNameRomaji: "ryuukyuukonohazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Otus elegans",
          range: "Ryukyu Islands",
        },
        {
          commonNameEnglish: "Oriental Scops-Owl",
          commonNameJapanese: "コノハズク",
          commonNameRomaji: "konohazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Otus sunia japonicus",
          range:
            "breeds Japan; at least partially migratory, but winter range not well documented",
        },
        {
          commonNameEnglish: "Blakiston's Fish-Owl",
          commonNameJapanese: "シマフクロウ",
          commonNameRomaji: "shima fukurou",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Bubo blakistoni",
          range: "N Japan (s Kuril Islands and Hokkaido)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/BuboBlakistoniIUCN2019-2.png/220px-BuboBlakistoniIUCN2019-2.png",
        },
        {
          commonNameEnglish: "Ural Owl",
          commonNameJapanese: "フクロウ",
          commonNameRomaji: "fukurou",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Strix uralensis japonica",
          range: "Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Strix_uralensis_distr..png/220px-Strix_uralensis_distr..png",
        },
        {
          commonNameEnglish: "Long-eared Owl",
          commonNameJapanese: "トラフズク",
          commonNameRomaji: "torafuzuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Asio otus",
          range: "Europe, Asia and North Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Asio_otus_distribution_map.png/220px-Asio_otus_distribution_map.png",
        },
        {
          commonNameEnglish: "Short-eared Owl",
          commonNameJapanese: "コミミズク",
          commonNameRomaji: "komimizuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Asio flammeus",
          range: "North America, Europe, n Asia and North Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Sumpfohreule-Asio_flammeus-World.png/220px-Sumpfohreule-Asio_flammeus-World.png",
        },
        {
          commonNameEnglish: "Northern Boobook",
          commonNameJapanese: "アオバズク",
          commonNameRomaji: "aobazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Ninox japonica",
          range:
            "SE Siberia to se Manchuria, e China, Korea, Japan, Ryukyu Islands and Taiwan; winters S Asia",
        },
        {
          commonNameEnglish: "Osprey or Australian Osprey",
          commonNameJapanese: "ミサゴ",
          commonNameRomaji: "misago",
          order: "Accipitriformes",
          family: "Pandionidae",
          species: "Pandion haliaetus",
          range: "Palearctic; winters to South Africa, India and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wiki-Pandion_haliaetus.png/220px-Wiki-Pandion_haliaetus.png",
        },
        {
          commonNameEnglish: "Oriental Honey-buzzard",
          commonNameJapanese: "ハチクマ",
          commonNameRomaji: "hachikuma",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Pernis ptilorhynchus orientalis",
          range: "S Siberia to Manchuria and Japan; winters to Greater Sundas",
        },
        {
          commonNameEnglish: "Crested or Small Serpent-Eagle",
          commonNameJapanese: "カンムリワシ",
          commonNameRomaji: "hachikuma",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Spilornis perplexus",
          range: "S Ryukyu Islands",
        },
        {
          commonNameEnglish: "Mountain Hawk-Eagle",
          commonNameJapanese: "クマタカ",
          commonNameRomaji: "kumataka",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Nisaetus nipalensis orientalis",
          range: "Japan",
        },
        {
          commonNameEnglish: "Grey-faced Buzzard",
          commonNameJapanese: "サシバ",
          commonNameRomaji: "sashiba",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Butastur indicus",
          range: "NE Asia; winters SE Asia to Philippines and Indonesia",
        },
        {
          commonNameEnglish: "Eastern Marsh-Harrier",
          commonNameJapanese: "チュウヒ",
          commonNameRomaji: "chuuhi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Circus spilonotus",
          range: "E Asia; winters to SE Asia, Philippines and Indonesia",
        },
        {
          commonNameEnglish: "Hen Harrier",
          commonNameJapanese: "ハイイロチュウヒ",
          commonNameRomaji: "haiirochuuhi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Circus cyaneus",
          range: "Widespread Eurasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Circus_cyaneus_distribution_map.png/220px-Circus_cyaneus_distribution_map.png",
        },
        {
          commonNameEnglish: "Japanese Sparrowhawk",
          commonNameJapanese: "ツミ",
          commonNameRomaji: "tsumi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Accipiter gularis",
          range:
            "Sakhalin, Kuril Is. and Japan; winters to Philippines and Indonesia",
        },
        {
          commonNameEnglish: "Northern Goshawk",
          commonNameJapanese: "オオタカ",
          commonNameRomaji: "ootaka",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Accipiter gentilis fujiyamae",
          range: "Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/AccipiterGentilis.png/220px-AccipiterGentilis.png",
        },
        {
          commonNameEnglish: "Steller's Sea-Eagle",
          commonNameJapanese: "オオワシ",
          commonNameRomaji: "oowashi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Haliaeetus pelagicus",
          range:
            "Coastal e Siberia; winters to China, Korea, Japan and Ryukyu Is.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Haliaeetus_pelagicus_distr.png/220px-Haliaeetus_pelagicus_distr.png",
        },
        {
          commonNameEnglish: "Rough-legged Hawk",
          commonNameJapanese: "ケアシノスリ",
          commonNameRomaji: "keashinosuri",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Buteo lagopus menzbieri",
          range: "NE Asia; winters to central Asia, n China and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Buteo_lagopus_distribution_map.png/220px-Buteo_lagopus_distribution_map.png",
        },
        {
          commonNameEnglish: "Eastern Buzzard",
          commonNameJapanese: "ノスリ",
          commonNameRomaji: "nosuri",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Buteo japonicus",
          range:
            "breeds from central Siberia east to Japan, northern Korea, and perhaps northeastern China; winters Japan and Korea south to southeast Asia",
        },
        {
          commonNameEnglish: "Eurasian Jay",
          commonNameJapanese: "カケス",
          commonNameRomaji: "kakesu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Garrulus glandarius japonicus",
          range: "Japan (Honshu, Shikoku, northern Kyushu, and Tsushima)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Garrulus_glandarius_distribution.jpg/220px-Garrulus_glandarius_distribution.jpg",
        },
        {
          commonNameEnglish: "Lidth's Jay",
          commonNameJapanese: "ルリカケス",
          commonNameRomaji: "rurikakesu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Garrulus lidthi",
          range: "Ryukyu Islands (Amami-O-Shima and Tokuno-Shima)",
        },
        {
          commonNameEnglish: "Azure-winged Magpie",
          commonNameJapanese: "オナガ",
          commonNameRomaji: "onaga",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Cyanopica cyanus japonica",
          range: "Japan (Honshu and Kyushu)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cyanopica_cyanus_distribution.png/220px-Cyanopica_cyanus_distribution.png",
        },
        {
          commonNameEnglish: "Spotted Nutcracker",
          commonNameJapanese: "ホシガラス",
          commonNameRomaji: "hoshigarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Nucifraga caryocatactes japonica",
          range: "Central and s Kuril Islands, Hokkaido and Honshu",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Map_of_distribution_of_Nucifraga_caryocatactes.png/220px-Map_of_distribution_of_Nucifraga_caryocatactes.png",
        },
        {
          commonNameEnglish: "Rook",
          commonNameJapanese: "ミヤマガラス",
          commonNameRomaji: "miyamagarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Corvus frugilegus pastinator",
          range: "E Asia; > to Korea, Japan and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rook_range_map.PNG/220px-Rook_range_map.PNG",
        },
        {
          commonNameEnglish: "Carrion Crow",
          commonNameJapanese: "ハシボソガラス",
          commonNameRomaji: "hashibosogarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Corvus corone orientalis",
          range: "Iran to n China, Korea and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Carrion_Crow_Range.png/240px-Carrion_Crow_Range.png",
        },
        {
          commonNameEnglish: "Common Raven",
          commonNameJapanese: "ワタリガラス",
          commonNameRomaji: "watarigarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Corvus corax kamtschaticus",
          range:
            "Siberia to Sea of Okhotsk, Sakhalin, Kuril Islands and n Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Corvus_corax_map.jpg/220px-Corvus_corax_map.jpg",
        },
      ]);
    });
};
