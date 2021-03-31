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
          profilePic:
            "https://www.linkpicture.com/q/LPic605aa8f1c3e361637733283.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d0/Oriental_Scops_Owl.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bubo_blakistoni.jpg/800px-Bubo_blakistoni.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Strix_uralensis_0a1.JPG/1024px-Strix_uralensis_0a1.JPG",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Waldohreule_in_freier_Wildbahn.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Short_Eared_Owl_on_the_Ground.jpg/1024px-Short_Eared_Owl_on_the_Ground.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/29/Ninox_japonica%2C_Japan.jpg",
        },
        {
          commonNameEnglish: "Eastern or Australian Osprey",
          commonNameJapanese: "ミサゴ",
          commonNameRomaji: "misago",
          order: "Accipitriformes",
          family: "Pandionidae",
          species: "Pandion haliaetus",
          range: "Palearctic; winters to South Africa, India and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wild_Pandion.jpg/1280px-Wild_Pandion.jpg",
        },
        {
          commonNameEnglish: "Oriental Honey-buzzard",
          commonNameJapanese: "ハチクマ",
          commonNameRomaji: "hachikuma",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Pernis ptilorhynchus orientalis",
          range: "S Siberia to Manchuria and Japan; winters to Greater Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/Oriental_Honey_Buzzard_%28Pernis_ptilorhynchus%29_Photograph_By_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Crested or Small Serpent-Eagle",
          commonNameJapanese: "カンムリワシ",
          commonNameRomaji: "hachikuma",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Spilornis perplexus",
          range: "S Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/37/Spilornis_cheela_%28Bandipur%2C_2008%29.jpg",
        },
        {
          commonNameEnglish: "Mountain Hawk-Eagle",
          commonNameJapanese: "クマタカ",
          commonNameRomaji: "kumataka",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Nisaetus nipalensis orientalis",
          range: "Japan",
          profilePic:
            "https://en.wikipedia.org/wiki/Mountain_hawk-eagle#/media/File:Mountain_Hawk_Eagle_Mahananda_WLS_West_Bengal_India_07.12.2015.jpg",
        },
        {
          commonNameEnglish: "Grey-faced Buzzard",
          commonNameJapanese: "サシバ",
          commonNameRomaji: "sashiba",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Butastur indicus",
          range: "NE Asia; winters SE Asia to Philippines and Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/32/Butastur_indicus.jpg",
        },
        {
          commonNameEnglish: "Eastern Marsh-Harrier",
          commonNameJapanese: "チュウヒ",
          commonNameRomaji: "chuuhi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Circus spilonotus",
          range: "E Asia; winters to SE Asia, Philippines and Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Circus_spilotonus.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Circus_cyaneus%2C_Ballaugh_Curragh%2C_Isle_of_Man_1.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/20100710_tumi_nagoya_03.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/81/Northern_Goshawk_ad_M2.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Adult_Steller%27s_sea_eagle_fishing.jpg/1920px-Adult_Steller%27s_sea_eagle_fishing.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Buteo_lagopus_29283.JPG/800px-Buteo_lagopus_29283.JPG",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Buteo_japonicus1.jpg/1024px-Buteo_japonicus1.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Eurasian_jay_YerevanBotanic2020.jpg/1280px-Eurasian_jay_YerevanBotanic2020.jpg",
        },
        {
          commonNameEnglish: "Lidth's Jay",
          commonNameJapanese: "ルリカケス",
          commonNameRomaji: "rurikakesu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Garrulus lidthi",
          range: "Ryukyu Islands (Amami-O-Shima and Tokuno-Shima)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Garrulus_lidthi_Ueno_2013-10-06.jpg/1280px-Garrulus_lidthi_Ueno_2013-10-06.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/30/2011_Blauelster_in_Shanghai.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Orzech%C3%B3wka_zwyczajna_nad_Morskim_Okiem.jpg/1024px-Orzech%C3%B3wka_zwyczajna_nad_Morskim_Okiem.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/Corvus_frugilegus-profile.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg",
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
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Corvus_corax_kamtschaticus%2C_nortern_Mongolia.JPG/1280px-Corvus_corax_kamtschaticus%2C_nortern_Mongolia.JPG",
        },
        {
          commonNameEnglish: "Greater White-fronted Goose",
          commonNameJapanese: "マガン",
          commonNameRomaji: "magan",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anser albifrons",
          range:
            "breeds in northern Russia, east to northeastern Siberia; winters in Europe east to southern Asia, south to northern India, southern China, and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Anser_albifrons_map.png/1280px-Anser_albifrons_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Greater_white-fronted_goose_%28cropped%29.jpg/1280px-Greater_white-fronted_goose_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Taiga Bean Goose",
          commonNameJapanese: "ニシヒシクイ",
          commonNameRomaji: "nishihishikui",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anser fabalis",
          range: "Taiga of e Siberia (east of Lake Baikal)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/AnserFabalisIUCNver2019_1.png/1280px-AnserFabalisIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Bean.goose.600pix.jpg",
        },
        {
          commonNameEnglish: "Tundra Bean Goose",
          commonNameJapanese: "ヒシクイ",
          commonNameRomaji: "hishikui",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anser serrirostris",
          range: "Tundra of ne Siberia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Tundra_Bean_Goose.jpg",
        },
        {
          commonNameEnglish: "Black Brant",
          commonNameJapanese: "コクガン",
          commonNameRomaji: "kokugan",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Branta nigricans",
          range:
            "breeds northeastern Siberia, western and northern Alaska, and northwestern Canada; winters from from Japan to Korea and northeastern China, and from Alaska to northwestern Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Brant_Goose_Range.png/1280px-Brant_Goose_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brent_Goose.jpg/1280px-Brent_Goose.jpg",
        },
        {
          commonNameEnglish: "Cackling Goose",
          commonNameJapanese: "シジュウガラガン",
          commonNameRomaji: "shijuu karagan",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Branta hutchinsii asiatica",
          range:
            "Locally in Aleutians and Semdi Is., Alaska (formerly bred from Kuril Is. and Commander Is. east to near Kodiak I.); winters Oregon, California",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Branta_hutchinsii_map.svg/1280px-Branta_hutchinsii_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/AleutianCanadaGoose2.jpg",
        },
        {
          commonNameEnglish: "Tundra Swan",
          commonNameJapanese: "コハクチョウ",
          commonNameRomaji: "kohakuchou",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Cygnus bewickii",
          range:
            "Kola Peninsula to arctic n Siberia; winters w Europe to s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Cygnus_columbianus_map.svg/1280px-Cygnus_columbianus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cygnus_bewickii_01.jpg/1280px-Cygnus_bewickii_01.jpg",
        },
        {
          commonNameEnglish: "Whooper Swan",
          commonNameJapanese: "オオハクチョウ",
          commonNameRomaji: "oohakuchou",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Cygnus cygnus",
          range: "Palearctic; winters to India and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/Cygnus-cygnus.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cygnus_cygnus_Singschwan.jpg/1024px-Cygnus_cygnus_Singschwan.jpg",
        },
        {
          commonNameEnglish: "Common Shelduck",
          commonNameJapanese: "ツクシガモ",
          commonNameRomaji: "tsukushigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Tadorna tadorna",
          range: "Palearctic region; winters to Near East, India and Myanmar",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TadornaTadornaIUCN.png/1280px-TadornaTadornaIUCN.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_Shelduck_%28Tadorna_tadorna%29_at_Sylvan_Heights.jpg/1280px-Common_Shelduck_%28Tadorna_tadorna%29_at_Sylvan_Heights.jpg",
        },
        {
          commonNameEnglish: "Baikal Teal",
          commonNameJapanese: "トモエガモ",
          commonNameRomaji: "tomoegamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Sibirionetta formosa",
          range:
            "breeds in northern and eastern Siberia; winters Japan, Korea, and eastern China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/SibirionettaFormosaIUCN2019-2.png/1280px-SibirionettaFormosaIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Anas.formosa.4.jpg",
        },
        {
          commonNameEnglish: "Garganey",
          commonNameJapanese: "シマアジ",
          commonNameRomaji: "shimaaji",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Spatula querquedula",
          range: "Palearctic; winters to s Africa and Australasian region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spatula_querquedula_map.svg/1280px-Spatula_querquedula_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Garganey_%28Anas_querquedula%29_RWD3.jpg/1280px-Garganey_%28Anas_querquedula%29_RWD3.jpg",
        },
        {
          commonNameEnglish: "Northern Shoveler",
          commonNameJapanese: "ハシビロガモ",
          commonNameRomaji: "hashibirogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Spatula clypeata",
          range:
            "Holarctic; winters to Africa, n South America and Malay Arch.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/SpatulaClypeata.png/1280px-SpatulaClypeata.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Northern_shoveler_Steve_Sinclair_outreach_use_only_%2819838806616%29.jpg/1280px-Northern_shoveler_Steve_Sinclair_outreach_use_only_%2819838806616%29.jpg",
        },
        {
          commonNameEnglish: "Gadwall",
          commonNameJapanese: "オカヨシガモ",
          commonNameRomaji: "okayoshigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mareca strepera",
          range: "Widespread Palearctic and Nearctic regions",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mareca_strepera_map.svg/1280px-Mareca_strepera_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gadwall-Anas-strepera.jpg/1280px-Gadwall-Anas-strepera.jpg",
        },
        {
          commonNameEnglish: "Falcated Duck",
          commonNameJapanese: "ヨシガモ",
          commonNameRomaji: "yoshigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mareca falcata",
          range: "E Siberia and Mongolia to n Japan; winters to India",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Falcated_duck_1.jpg/1280px-Falcated_duck_1.jpg",
        },
        {
          commonNameEnglish: "Eurasian Wigeon",
          commonNameJapanese: "ヒドリガモ",
          commonNameRomaji: "hidorigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mareca penelope",
          range: "N and central Eurasia; winters to Africa and s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mareca_penelope_map.svg/1280px-Mareca_penelope_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Mareca_penelope_kuribo_cropped.jpg",
        },
        {
          commonNameEnglish: "Eastern Spot-billed Duck",
          commonNameJapanese: "カルガモ",
          commonNameRomaji: "karugamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas zonorhyncha",
          range: "Breeds ne Asia; winters to s China, Taiwan and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Anas_zonorhyncha_swimming.jpg/1280px-Anas_zonorhyncha_swimming.jpg",
        },
        {
          commonNameEnglish: "Mallard",
          commonNameJapanese: "マガモ",
          commonNameRomaji: "magamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas platyrhynchos",
          range: "Holarctic; winters to Mexico, North Africa, India and Borneo",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/AnasPlatyrhynchosIUCN2019_2.png/1280px-AnasPlatyrhynchosIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/1024px-Anas_platyrhynchos_male_female_quadrat.jpg",
        },
        {
          commonNameEnglish: "Northern Pintail",
          commonNameJapanese: "オナガガモ",
          commonNameRomaji: "onagagamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas acuta",
          range:
            "Palearctic and N America; winters to s Eurasia and n S America",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/AnasAcutaIUCN2019_2.png/1280px-AnasAcutaIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Northern_Pintails_%28Male_%26_Female%29_I_IMG_0911.jpg",
        },
        {
          commonNameEnglish: "Eurasian Teal",
          commonNameJapanese: "コガモ",
          commonNameRomaji: "kogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas crecca",
          range:
            "breeds in Palearctic and the Aleutian Islands; winters from southern and central Europe east to Japan, south to Africa, south Asia, and southeast Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/e/e2/Anas_crecca_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Eurasian_teal_%28Anas_crecca%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Common Pochard",
          commonNameJapanese: "ホシハジロ",
          commonNameRomaji: "hoshihajiro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya ferina",
          range: "Palearctic; winters to tropical Africa, India and SE Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AythyaFerinaIUCNver2018_2.png/1280px-AythyaFerinaIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Aythya_ferina_Sandwell_2.jpg/1280px-Aythya_ferina_Sandwell_2.jpg",
        },
        {
          commonNameEnglish: "Baer's Pochard",
          commonNameJapanese: "アカハジロ",
          commonNameRomaji: "akahajiro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya baeri",
          range: "NE Eurasia; winters to India, SE Asia and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Aythya_baeri_map_BirdLife.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b7/Baer%27s_Pochard_RWD4.jpg",
        },
        {
          commonNameEnglish: "Tufted Duck",
          commonNameJapanese: "キンクロハジロ",
          commonNameRomaji: "kinkurohajiro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya fuligula",
          range: "N Palearctic region; winters to n Africa and s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tufted_Duck_Range.png/1280px-Tufted_Duck_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tufted-Duck-male-female.jpg/800px-Tufted-Duck-male-female.jpg",
        },
        {
          commonNameEnglish: "Greater Scaup",
          commonNameJapanese: "スズガモ",
          commonNameRomaji: "suzugamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya marila",
          range:
            "breeds in northern Eurasia; winters to the Mediterranean region, India, Japan, Korea, and China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/df/The_GS_range_map.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Greater-scaup-male2.jpg/1280px-Greater-scaup-male2.jpg",
        },
        {
          commonNameEnglish: "Steller's Eider",
          commonNameJapanese: "コケワタガモ",
          commonNameRomaji: "kokewatagamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Polysticta stelleri",
          range: "Arctic Siberia (Taymyr Peninsula) east to n Alaska",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Polysticta_stelleri_range_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Steller%27s_Eider_%28Polysticta_stelleri%29_%2813667966664%29.jpg/1280px-Steller%27s_Eider_%28Polysticta_stelleri%29_%2813667966664%29.jpg",
        },
        {
          commonNameEnglish: "Harlequin Duck",
          commonNameJapanese: "シノリガモ",
          commonNameRomaji: "shinorigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Histrionicus histrionicus",
          range:
            "breeds E Siberia northern Japan, Alaska south to Oregon and Wyoming, E Canada, Greenland, and Iceland; winters coastally from Siberia to Japan and Korea, Alaska to central California, NE United States, S Greenland, and Iceland",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Histrionicus_histrionicus_map.svg/1280px-Histrionicus_histrionicus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Histrionicus_histrionicus_drake_Barnegat.jpg/1280px-Histrionicus_histrionicus_drake_Barnegat.jpg",
        },
        {
          commonNameEnglish: "Siberian Scoter",
          commonNameJapanese: "ヨーロッパビロードキンクロ",
          commonNameRomaji: "yooroppa biroodokinkuro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Melanitta stejnegeri",
          range: "Breeds ne Asia; winters coastal e Asia to Japan and China",
        },
        {
          commonNameEnglish: "Black Scoter",
          commonNameJapanese: "クロガモ",
          commonNameRomaji: "kurogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Melanitta americana",
          range: "Breeds n Siberia to Alaska; winters to n US",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Melanitta_americana_map.svg/1280px-Melanitta_americana_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Melanitta_americana_Barnegat_NJ.jpg/1280px-Melanitta_americana_Barnegat_NJ.jpg",
        },
        {
          commonNameEnglish: "Long-tailed Duck",
          commonNameJapanese: "コオリガモ",
          commonNameRomaji: "koorigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Clangula hyemalis",
          range: "Coasts of Holarctic region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Clangula_hyemalis_map.svg/1280px-Clangula_hyemalis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/8e/Long-tailed-duck.jpg",
        },
        {
          commonNameEnglish: "Common Goldeneye",
          commonNameJapanese: "ホオジロガモ",
          commonNameRomaji: "hoojirogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Bucephala clangula",
          range:
            "N Eurasia; winters to Mediterranean, Persian Gulf and s China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bucephala_clangula_map.svg/1280px-Bucephala_clangula_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Common_Goldeneye_%28Bucephala_clangula%29.jpg",
        },
        {
          commonNameEnglish: "Smew",
          commonNameJapanese: "ミコアイサ",
          commonNameRomaji: "mikoaisa",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mergellus albellus",
          range: "N Eurasia; winters to North Africa, India and e China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MergellusAlbellusIUCNver2018_2.png/1280px-MergellusAlbellusIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Zwergsaeger_maenchen_weibchen.jpg/800px-Zwergsaeger_maenchen_weibchen.jpg",
        },
        {
          commonNameEnglish: "Common Merganser",
          commonNameJapanese: "カワアイサ",
          commonNameRomaji: "kawaaisa",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mergus merganser",
          range:
            "Palearctic region; winters Mediterranean to n India and China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/MergusMerganserIUCNver2019-2.png/1280px-MergusMerganserIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mergus_merganser_-Sandwell_-England_-male-8.jpg/1280px-Mergus_merganser_-Sandwell_-England_-male-8.jpg",
        },
        {
          commonNameEnglish: "Red-breasted Merganser",
          commonNameJapanese: "ウミアイサ",
          commonNameRomaji: "umiaisa",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mergus serrator",
          range:
            "N Palearctic and n N America; winters s Palearctic and Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/MergusSerratorIUCN2018_2.png/1280px-MergusSerratorIUCN2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mergus_serrator_-New_Jersey_-USA_-winter-8.jpg/1280px-Mergus_serrator_-New_Jersey_-USA_-winter-8.jpg",
        },
        {
          commonNameEnglish: "Japanese Quail",
          commonNameJapanese: "ウズラ",
          commonNameRomaji: "uzura",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Coturnix japonica",
          range: "E Palearctic; winters to SE Asia and e China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Japanese_Quail.jpg/800px-Japanese_Quail.jpg",
        },
        {
          commonNameEnglish: "Copper Pheasant",
          commonNameJapanese: "コウライキジ",
          commonNameRomaji: "kouraikiji",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Phasianus versicolor tanensis",
          range: "Japan (central Honshu) and Izu Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Phasianus_colchicus_map.svg/1280px-Phasianus_colchicus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/79/Male_and_female_pheasant.jpg",
        },
        {
          commonNameEnglish: "Hazel Grouse",
          commonNameJapanese: "エゾライチョウ",
          commonNameRomaji: "ezoraichou",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Tetrastes bonasia vicinitas",
          range: "Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/c/c4/Tetrastes_bonasia_distribution_revise_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Tetrastes_bonasia.jpg",
        },
        {
          commonNameEnglish: "Rock Ptarmigan",
          commonNameJapanese: "ライチョウ",
          commonNameRomaji: "raichou",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Lagopus muta japonica",
          range: "Honshu",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/1/12/Rock_Ptarmigan_Lagopus_muta_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rock_Ptarmigan_%28Lagopus_Muta%29.jpg/1280px-Rock_Ptarmigan_%28Lagopus_Muta%29.jpg",
        },
        {
          commonNameEnglish: "Little Grebe",
          commonNameJapanese: "カイツブリ",
          commonNameRomaji: "kaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Tachybaptus ruficollis poggei",
          range: "SE to ne Asia, Hainan, Taiwan, Japan and s Kuril Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/TachybaptusRuficollisIUCN2019-2.png/1280px-TachybaptusRuficollisIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Little_grebe_Zwergtaucher.jpg/1280px-Little_grebe_Zwergtaucher.jpg",
        },
        {
          commonNameEnglish: "Horned Grebe",
          commonNameJapanese: "ミミカイツブリ",
          commonNameRomaji: "mimikaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps auritus",
          range: "Locally in Palearctic region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Slavonian_Grebe-location-map-en.svg/1280px-Slavonian_Grebe-location-map-en.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Horned_grebe_%282%29_-_%28Podiceps_auritus%29.JPG/1280px-Horned_grebe_%282%29_-_%28Podiceps_auritus%29.JPG",
        },
        {
          commonNameEnglish: "Red-necked Grebe",
          commonNameJapanese: "アカエリカイツブリ",
          commonNameRomaji: "akaerikaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps grisegena holbollii",
          range: "North America and ne Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/PodicepsGrisegenaIUCNver2019-2.png/1920px-PodicepsGrisegenaIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gr%C3%A8bejougrisparade.jpg/800px-Gr%C3%A8bejougrisparade.jpg",
        },
        {
          commonNameEnglish: "Great Crested Grebe",
          commonNameJapanese: "カンムリカイツブリ",
          commonNameRomaji: "kanmurikaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps cristatus",
          range: "Palearctic region and s Oriental region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/PodicepsCristatusIUCN2019-2.png/1280px-PodicepsCristatusIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Great_Crested_Grebe_1_-_Penrith.jpg/1920px-Great_Crested_Grebe_1_-_Penrith.jpg",
        },
        {
          commonNameEnglish: "Black-necked Grebe",
          commonNameJapanese: "ハジロカイツブリ",
          commonNameRomaji: "hajirokaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps nigricollis",
          range: "Locally in Eurasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/PodicepsNigricollisIUCNver2019-2.png/1920px-PodicepsNigricollisIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Black-necked_Grebe_Schwarzhalstaucher.jpg/1920px-Black-necked_Grebe_Schwarzhalstaucher.jpg",
        },
        {
          commonNameEnglish: "Japanese Wood Pigeon",
          commonNameJapanese: "カラスバト",
          commonNameRomaji: "karasubato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Columba janthina",
          range:
            "Small islands sw of South Korea to Ryukyu Islands; Ogasawara (Bonin Islands) and Iwo (Volcano Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Columba_janthina.JPG/1280px-Columba_janthina.JPG",
        },
        {
          commonNameEnglish: "Oriental Turtle-Dove",
          commonNameJapanese: "キジバト",
          commonNameRomaji: "kijibato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Streptopelia orientalis",
          range:
            "Central Siberia to China, Korea, Japan and Kuril Islands; Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Orientalturtledove.JPG/1920px-Orientalturtledove.JPG",
        },
        {
          commonNameEnglish: "Eurasian Collared-Dove",
          commonNameJapanese: "シラコバト",
          commonNameRomaji: "shirakobato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Streptopelia decaocto",
          range: "Europe to Middle East, India, Sri Lanka, w China and Korea.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Streptopelia_decaocto_range_map.png/1920px-Streptopelia_decaocto_range_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Eurasian_collared-dove_%28Streptopelia_decaocto%29.jpg/800px-Eurasian_collared-dove_%28Streptopelia_decaocto%29.jpg",
        },
        {
          commonNameEnglish: "Emerald Dove",
          commonNameJapanese: "キンバト",
          commonNameRomaji: "kinbato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Chalcophaps indica",
          range:
            "India to southeastern China, south to the Philippines, Indonesia and western Papuan islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chalcophaps_indica_-a_pair_in_captivity-8a.jpg/1280px-Chalcophaps_indica_-a_pair_in_captivity-8a.jpg",
        },
        {
          commonNameEnglish: "White-bellied Green-Pigeon",
          commonNameJapanese: "アオバト",
          commonNameRomaji: "aobato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Treron sieboldii",
          range: "Japan, mountains of Taiwan and e China (Jiangsu and Fujian)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Treron_Sieboldii.jpg/1280px-Treron_Sieboldii.jpg",
        },
        {
          commonNameEnglish: "Whistling Green-Pigeon",
          commonNameJapanese: "ズアカアオバト",
          commonNameRomaji: "zuakaaobato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Treron formosae",
          range: "Ryukyu Islands",
          profilePic:
            "https://farm8.staticflickr.com/7343/14158900014_23b46c143e_n.jpg",
        },
        {
          commonNameEnglish: "Northern Hawk-Cuckoo",
          commonNameJapanese: "キタジュウイチ",
          commonNameRomaji: "kitajuuichi",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Hierococcyx hyperythrus",
          range: "NE China to Korea, lower Yangtze Valley and s Japan",
          profilePic:
            "https://live.staticflickr.com/2338/2214115656_616f654144_n.jpg",
        },
        {
          commonNameEnglish: "Lesser Cuckoo",
          commonNameJapanese: "ホトトギス",
          commonNameRomaji: "hototogisu",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Cuculus poliocephalus",
          range:
            "South and east Asia; winters pen. India, Sri Lanka and e Africa",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/48/Cuculus_poliocephalus.jpg",
        },
        {
          commonNameEnglish: "Common Cuckoo",
          commonNameJapanese: "カッコウ",
          commonNameRomaji: "kakkou",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Cuculus canorus",
          range: "Europe, Siberia to Kamchatka and Japan; winters to s Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/CuculusCanorusIUCNver2019_3.png/1280px-CuculusCanorusIUCNver2019_3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Cuculus_canorus_vogelartinfo_chris_romeiks_CHR0791_cropped.jpg",
        },
        {
          commonNameEnglish: "Oriental Cuckoo",
          commonNameJapanese: "ツツドリ",
          commonNameRomaji: "tsutsudori",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Cuculus optatus",
          range:
            "Russia to Siberia, n China, Korea, Japan; winters to Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Oriental_Cuckoo_Maiala.JPG",
        },
        {
          commonNameEnglish: "Grey Nightjar",
          commonNameJapanese: "ヨタカ",
          commonNameRomaji: "yotaka",
          order: "Caprimulgiformes",
          family: "Caprimulgidae",
          species: "Caprimulgus jotaka",
          range:
            "SE Siberia to e China, Japan and Korea; winters to Gr. Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Grey_Nightjar.jpg",
        },
        {
          commonNameEnglish: "White-throated Needletail",
          commonNameJapanese: "ハリオアマツバメ",
          commonNameRomaji: "harioamatsubame",
          order: "Apodiformes",
          family: "Apodidae",
          species: "Hirundapus caudacutus",
          range: "Siberia to Japan and Kuril Islands.; winters to Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HirundapusCaudacutusDistribution.png/1024px-HirundapusCaudacutusDistribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/44/White-throated_needletail_Hunting_over_Wolotschajewka_Perwaja_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Pacific Swift",
          commonNameJapanese: "アマツバメ",
          commonNameRomaji: "amatsubame",
          order: "Apodiformes",
          family: "Apodidae",
          species: "Apus pacificus",
          range:
            "Siberia to Kamchatka, n China and n Japan; winters Indonesia, Melanesia, Australia, Tasmania",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Apuspacificuspacificus.png/800px-Apuspacificuspacificus.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pacific_Swift.jpg/1280px-Pacific_Swift.jpg",
        },
        {
          commonNameEnglish: "House Swift",
          commonNameJapanese: "ヒメアマツバメ",
          commonNameRomaji: "himeamatsubame",
          order: "Apodiformes",
          family: "Apodidae",
          species: "Apus nipalensis",
          range: "Nepal to se China, Myanmar, Thailand, Indochina, Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/8d/House_Swift.jpg",
        },
        {
          commonNameEnglish: "Brown-cheeked Rail",
          commonNameJapanese: "クイナ",
          commonNameRomaji: "kuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Rallus indicus",
          range: "E Siberia to Japan; winters to SE Asia and Borneo",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Rallus_indicus_distribution_map.svg/800px-Rallus_indicus_distribution_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/The_brown-cheeked_rail_or_eastern_water_rail.jpg/1280px-The_brown-cheeked_rail_or_eastern_water_rail.jpg",
        },
        {
          commonNameEnglish: "Okinawa Rail",
          commonNameJapanese: "ヤンバルクイナ",
          commonNameRomaji: "yanbarukuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Hypotaenidia okinawae",
          range: "Swamps of n Okinawa I. (s Ryukyu Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Okinawa_Rail.jpg",
        },
        {
          commonNameEnglish: "Common Moorhen",
          commonNameJapanese: "バン",
          commonNameRomaji: "ban",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Gallinula chloropus",
          range: "Palearctic; winters to Arabia and s China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/GallinulaChloropusIUCNver2019-2.png/1280px-GallinulaChloropusIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Common_moorhen_%28Gallinula_chloropus%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Eurasian Coot",
          commonNameJapanese: "オオバン",
          commonNameRomaji: "ooban",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Fulica atra",
          range: "Palearctic; winters to Africa, Indonesia and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/FulicaAtraIUCN2019_2.png/1280px-FulicaAtraIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Fulica_atra%2C_Bl%C3%A4sshuhn_am_Adenauer-Weiher.jpg/1280px-Fulica_atra%2C_Bl%C3%A4sshuhn_am_Adenauer-Weiher.jpg",
        },
        {
          commonNameEnglish: "Watercock",
          commonNameJapanese: "ツルクイナ",
          commonNameRomaji: "tsurukuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Gallicrex cinerea",
          range: "Lowlands of s and e Asia and Malay Archipelago",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gallicrex_cinerea_-Basai_Wetlands%2C_near_Gurgaon%2C_Haryana%2C_India-8.jpg",
        },
        {
          commonNameEnglish: "Slaty-legged Crake",
          commonNameJapanese: "オオクイナ",
          commonNameRomaji: "ookuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Rallina eurizonoides sepiaria",
          range: "Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Slaty-legged_crake_%28Rallina_eurizonoides%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Ruddy-breasted Crake",
          commonNameJapanese: "ヒクイナ",
          commonNameRomaji: "hikuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Zapornia fusca",
          range:
            "Ryukyu Islands, Japan, e China, Manchuria, Indochina and Taiwan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Ruddy-breasted_Crake_%28Porzana_fusca%29_in_Kolkata_I_IMG_2675.jpg",
        },
        {
          commonNameEnglish: "White-naped Crane",
          commonNameJapanese: "マナヅル",
          commonNameRomaji: "manazuru",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Antigone vipio",
          range: "Siberia and Manchuria; winters to s China, Korea and Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/White-naped_Crane_at_Saijyo_Ehime2.jpg/800px-White-naped_Crane_at_Saijyo_Ehime2.jpg",
        },
        {
          commonNameEnglish: "Common Crane",
          commonNameJapanese: "クロヅル",
          commonNameRomaji: "kurozuru",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Grus grus",
          range: "Breeds n Eurasia; winters to n Africa, s India and SE Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/60/Distribuci%C3%B3n_grullas.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Common_crane_grus_grus.jpg/1024px-Common_crane_grus_grus.jpg",
        },
        {
          commonNameEnglish: "Hooded Crane",
          commonNameJapanese: "ナベヅル",
          commonNameRomaji: "nabezuru",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Grus monacha",
          range:
            "Siberia and nw Manchuria; winters to e China, Korea, and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Grus_monacha_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg/1280px-Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg",
        },
        {
          commonNameEnglish: "Red-crowned Crane",
          commonNameJapanese: "タンチョウ",
          commonNameRomaji: "tanchou",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Grus japonensis",
          range: "Siberia, Hokkaido and Mongolia; winters e China and Korea",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg/1280px-Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg",
        },
        {
          commonNameEnglish: "Black-winged Stilt",
          commonNameJapanese: "セイタカシギ",
          commonNameRomaji: "seitakashigi",
          order: "Charadriiformes",
          family: "Recurvirostridae",
          species: "Himantopus himantopus",
          range: "Mediterranean and sub-Saharan Africa to SE Asia and Taiwan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/HimantopusHimantopusIUCN2019-3.png/1280px-HimantopusHimantopusIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Black-winged_stilt_%28Himantopus_himantopus%29.jpg/1280px-Black-winged_stilt_%28Himantopus_himantopus%29.jpg",
        },
        {
          commonNameEnglish: "Eurasian Oystercatcher",
          commonNameJapanese: "ミヤコドリ",
          commonNameRomaji: "miyakodori",
          order: "Charadriiformes",
          family: "Haematopodidae",
          species: "Haematopus ostralegus osculans",
          range: "Kamchatka Peninsula and North Korea; winters e China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/dd/Haematopus_ostralegus_distr.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Haematopus_ostralegus_Norway.jpg/699px-Haematopus_ostralegus_Norway.jpg",
        },
      ]);
    });
};
